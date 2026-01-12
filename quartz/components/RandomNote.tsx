import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const RandomNote: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
    // Filter out index files
    const filteredFiles = allFiles?.filter(file => {
      return file.frontmatter?.title !== "index" && !file.slug?.endsWith("index")
    }) ?? []
    const totalFiles = filteredFiles.length
    
    if (totalFiles === 0) return null

    return (
      <div class="random-note-sidebar">
        <a 
          href="#"
          class="random-link"
          data-slugs={JSON.stringify(filteredFiles.map(file => {
            const slug = file.canonicalSlug || file.slug
            return slug && !slug.startsWith("/") ? `/${slug}` : slug
          }))}
          id="sidebar-random-note"
        >
          🎲 / {totalFiles} notes
        </a>
      </div>
    )
  }

  RandomNote.css = `
  .random-note-sidebar {
    margin: 0.1rem 0;
  }
  .random-link {
    color: var(--primary);
    text-decoration: none;
    font-size: 0.9rem;
  }
  .random-link:hover {
    text-decoration: underline;
  }
  `

  RandomNote.afterDOMLoaded = `
  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'sidebar-random-note') {
      e.preventDefault();
      const link = e.target;
      const slugs = JSON.parse(link.getAttribute('data-slugs'));
      if (slugs && slugs.length > 0) {
        const currentPath = window.location.pathname;
        const availableSlugs = slugs.filter(slug => {
          const normalizedCurrent = currentPath.replace(/\\/$/, '');
          const normalizedSlug = slug.replace(/\\/$/, '');
          return normalizedSlug !== normalizedCurrent;
        });
        const targetSlugs = availableSlugs.length > 0 ? availableSlugs : slugs;
        const randomIndex = Math.floor(Math.random() * targetSlugs.length);
        const randomSlug = targetSlugs[randomIndex];
        sessionStorage.setItem('quartzRandomNavigation', 'true');
        window.location.href = randomSlug;
      }
    }
  });
  `

  return RandomNote
}) satisfies QuartzComponentConstructor
