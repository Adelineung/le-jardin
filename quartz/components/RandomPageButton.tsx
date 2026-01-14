import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/randomPage.inline"

export default (() => {
    function RandomPageButton({ allFiles, displayClass }: QuartzComponentProps) {
        // Check if it's mobile-only display class
        if (displayClass && displayClass.includes('mobile-only')) {
            return null
        }

        // Filter out index files
        const filteredFiles = allFiles?.filter(file => {
            return file.frontmatter?.title !== "index" && !file.slug?.endsWith("index")
        }) ?? []
        const totalFiles = filteredFiles.length
        
        if (totalFiles === 0) return null

        return (
            <a 
                id="random-page-button-sidebar" 
                class="random-page-button sidebar-random-button"
                data-slugs={JSON.stringify(filteredFiles.map(file => {
                    const slug = file.canonicalSlug || file.slug
                    return slug && !slug.startsWith("/") ? `/${slug}` : slug
                }))}
            >
                🎲 / {totalFiles} notes
            </a>
        )
    }
    
    RandomPageButton.css = `
        .sidebar-random-button {
            cursor: pointer;
            text-decoration: none;
            color: var(--secondary);
        }
        .sidebar-random-button:hover {
            color: var(--tertiary);
        }
        
        /* Hide sidebar version on mobile */
        @media (max-width: 768px) {
            .sidebar-random-button {
                display: none;
            }
        }
    `
    
    RandomPageButton.afterDOMLoaded = script
    return RandomPageButton
}) satisfies QuartzComponentConstructor