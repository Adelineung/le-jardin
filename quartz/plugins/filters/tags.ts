import { QuartzFilterPlugin } from "../types"

interface Options {
  excludedTags?: string[]
  includedTags?: string[]
}

export const RemoveTags: QuartzFilterPlugin<Options> = (opts?: Options) => {
  const excludedTags = opts?.excludedTags ?? ["personal", "unpublished"]
  const includedTags = opts?.includedTags
  
  return {
    name: "RemoveTags",
    shouldPublish(_ctx, [_tree, vfile]) {
      // Get tags from frontmatter
      const rawTags = vfile.data?.frontmatter?.tags
      
      // If no tags at all, publish it
      if (!rawTags) {
        return true
      }
      
      // Convert tags to array for easier processing
      let tagsArray: string[] = []
      
      if (Array.isArray(rawTags)) {
        tagsArray = rawTags.map(tag => tag.toString().toLowerCase().trim())
      } else if (typeof rawTags === 'string') {
        tagsArray = [rawTags]
      }
      
      // If includedTags is provided, check inclusion
      if (includedTags && includedTags.length > 0) {
        const normalizedIncludedTags = includedTags.map(tag => tag.toLowerCase().trim())
        
        // Check if any tag is in the included list
        const hasIncludedTag = tagsArray.some(tag => 
          normalizedIncludedTags.includes(tag)
        )
        
        // If no included tag found, don't publish
        if (!hasIncludedTag) {
          return false
        }
      }
      
      // Check for excluded tags
      const normalizedExcludedTags = excludedTags.map(tag => tag.toLowerCase().trim())
      const hasExcludedTag = tagsArray.some(tag => 
        normalizedExcludedTags.includes(tag)
      )
      
      // Publish if no excluded tags
      return !hasExcludedTag
    },
  }
}