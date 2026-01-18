#!/usr/bin/env python3
import subprocess
import yaml
import re
import os
import sys
import json
import subprocess

# those are filtered and not gonna pass the git commit command 
# they can be different from the tags filtered by
# Plugin.RemoveTags({ excludedTags: ["unpublished"] }), in quartz.config.ts
verbose = False
exclude_tags = {'private', 'unpublished', 'wip', 'dev'}

# Try to load from config file
config_file = '.git/pre-commit-config.json'
if os.path.exists(config_file):
    try:
        with open(config_file, 'r') as f:
            config = json.load(f)
            exclude_tags = set(config.get('exclude_tags', exclude_tags))
    except (json.JSONDecodeError, IOError):
        pass  # Keep defaults if config file is invalid

def should_exclude(filepath):
    """Check frontmatter for exclusion rules - WITH DEBUG OUTPUT"""
    global exclude_tags

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
        if not match:
            print(f"  ❓ {filepath}: No frontmatter found")
            return False
        
        frontmatter = yaml.safe_load(match.group(1))
        if not frontmatter:
            print(f"  ❓ {filepath}: Empty frontmatter")
            return False
        
        # Debug: Show what we found
        if verbose:
            print(f"  📄 {filepath}:")
            print(f"    draft: {frontmatter.get('draft', 'not set')}")
            print(f"    tags: {frontmatter.get('tags', 'not set')}")
        
        # Check draft
        draft = frontmatter.get('draft')
        if draft is True or str(draft).lower() in ('true', 'yes', '1'):
            # print(f"    ✅ WOULD EXCLUDE: draft={draft}")
            return True
        
        # Check tags
        tags = frontmatter.get('tags', [])
        
        # Handle different tag formats
        tag_list = []
        if isinstance(tags, list):
            tag_list = [str(tag).lower() for tag in tags]
        elif isinstance(tags, str):
            tag_list = [tag.strip().lower() for tag in tags.split(',')]
        
        for tag in tag_list:
            if tag in exclude_tags:
                # print(f"    ✅ WOULD EXCLUDE: tag='{tag}'")
                return True
        
        if verbose: print(f"    ✓ Would commit (no exclusion rules matched)")
        return False
        
    except Exception as e:
        print(f"  ❌ {filepath}: ERROR parsing - {e}")
        return False

def main_git(detail=False):
    # Get all .md files in content/ folder
    md_files = []
    for root, dirs, files in os.walk('content'):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    
    if not md_files:
        print("No .md files found in content/ folder!")
        return
    
    excluded_list = []
    included_list = []
    
    for filepath in sorted(md_files):
        if should_exclude(filepath):
            excluded_list += [filepath]
        else:
            included_list += [filepath]
        # print()  # Blank line between files

    output = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True).stdout
    # git_files = [line[2:].strip().replace("\"","") for line in output.strip().split('\n') if line]

    # Parse both status and filename
    git_entries = []
    for line in output.strip().split('\n'):
        if line:
            status = line[:2].strip().replace("??", "N")  # "N" for new/untracked
            filename = line[2:].strip().replace("\"", "")
            git_entries.append((status, filename))

    # Filter out excluded files
    # publishable_files = sorted(list(set(git_files) ^ set(excluded_list)))
    publishable_entries = [(status, filename) for status, filename in git_entries 
                          if filename not in excluded_list]

    # sorted by status or filename
    publishable_entries_sorted = sorted(publishable_entries, key=lambda x: x[0])
    # publishable_entries_sorted = sorted(publishable_entries, key=lambda x: x[1])
    publishable_files = [filename for _, filename in publishable_entries_sorted]


    print(f"SUMMARY:")
    print(f"  Total md files: {len(md_files)} / ({len(excluded_list)} excluded)")
    print(f"  Excluded tags: {sorted(exclude_tags)}")
    print("=" * 50)
    if detail:
        print(f"  Would EXCLUDE: {len(excluded_list)}")
        for x in excluded_list:
            print(f"    {x}")
        print("=" * 50)
        print(f"  git status: unstaged {len(git_entries)}")
        for x in git_entries:
            print(f"    {x}")

        print("=" * 50)
    
    # Define some color codes (optional)
    COLORS = {
        'N': '\033[92m',  # Green for new files
        'M': '\033[93m',  # Yellow for modified
        'A': '\033[96m',  # Cyan for added
        'D': '\033[91m',  # Red for deleted
        'R': '\033[95m',  # Magenta for renamed
        'C': '\033[94m',  # Blue for copied
        'U': '\033[90m',  # Gray for unmerged
    }
    RESET = '\033[0m'

    # Group and print with colors
    status_groups = {}
    for status, filename in publishable_entries_sorted:
        status_groups.setdefault(status, []).append(filename)

    print(f"  ✅ {len(publishable_entries_sorted)} unstaged and valid files to git add + commit")
    for status, files in sorted(status_groups.items()):
        color = COLORS.get(status, '')
        print(f"\n{color}Status: {status} ({len(files)}){RESET}")
        for filename in sorted(files):
            print(f"    {color}{filename}{RESET}")


if __name__ == '__main__':
    # if len(sys.argv) > 1 and sys.argv[1] == "list":
    if len(sys.argv) > 1:
        main_git(detail=True)
    else:
        main_git()