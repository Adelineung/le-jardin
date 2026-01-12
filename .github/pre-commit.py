#!/usr/bin/env python3
import subprocess
import yaml
import re
import os

def should_exclude(filepath):
    """Check frontmatter for exclusion rules - WITH DEBUG OUTPUT"""
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
        print(f"  📄 {filepath}:")
        print(f"    draft: {frontmatter.get('draft', 'not set')}")
        print(f"    tags: {frontmatter.get('tags', 'not set')}")
        
        # Check draft
        draft = frontmatter.get('draft')
        if draft is True or str(draft).lower() in ('true', 'yes', '1'):
            print(f"    ✅ WOULD EXCLUDE: draft={draft}")
            return True
        
        # Check tags
        tags = frontmatter.get('tags', [])
        exclude_tags = {'private', 'unpublished', 'internal', 'secret'}
        
        # Handle different tag formats
        tag_list = []
        if isinstance(tags, list):
            tag_list = [str(tag).lower() for tag in tags]
        elif isinstance(tags, str):
            tag_list = [tag.strip().lower() for tag in tags.split(',')]
        
        for tag in tag_list:
            if tag in exclude_tags:
                print(f"    ✅ WOULD EXCLUDE: tag='{tag}'")
                return True
        
        print(f"    ✓ Would commit (no exclusion rules matched)")
        return False
        
    except Exception as e:
        print(f"  ❌ {filepath}: ERROR parsing - {e}")
        return False

def main():
    print("=== DRY RUN: Checking all .md files in content/ ===")
    print("(No files will be modified)\n")
    
    # Get all .md files in content/ folder
    md_files = []
    for root, dirs, files in os.walk('content'):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    
    if not md_files:
        print("No .md files found in content/ folder!")
        return
    
    print(f"Found {len(md_files)} .md file(s) in content/\n")
    
    excluded_count = 0
    included_count = 0
    
    for filepath in sorted(md_files):
        if should_exclude(filepath):
            excluded_count += 1
        else:
            included_count += 1
        print()  # Blank line between files
    
    print("=" * 50)
    print(f"SUMMARY:")
    print(f"  Total files: {len(md_files)}")
    print(f"  Would EXCLUDE: {excluded_count}")
    print(f"  Would COMMIT: {included_count}")
    print("\nKey:")
    print("  ✅ = Would exclude")
    print("  ✓ = Would commit")
    print("  ❓ = No/empty frontmatter")
    print("  ❌ = Error parsing")

if __name__ == '__main__':
    main()