import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
// @ts-ignore
import randomScript from "./scripts/randomPage.inline"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData, allFiles }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const filteredFiles = allFiles?.filter(file => {
      return file.frontmatter?.title !== "index" && !file.slug?.endsWith("index")
    }) ?? []
    const totalFiles = filteredFiles.length
    
    if (totalFiles === 0) return null
    
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year} / Total notes: {totalFiles}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
          
          {/* Random note button */}
          <li>
            <a 
                id="random-page-button-footer" 
                class="random-page-button"
                data-slugs={JSON.stringify(filteredFiles.map(file => {
                    const slug = file.canonicalSlug || file.slug
                    return slug && !slug.startsWith("/") ? `/${slug}` : slug
                }))}
                style={{ display: 'none' }}  // Hidden by default
            >
                Random note 🎲
            </a>
        </li>
        </ul>
      </footer>
    )
  } 

  Footer.css = `
      ${style}
      
      /* Show footer button only on mobile */
      @media (max-width: 768px) {
          #random-page-button-footer {
              display: inline !important;
          }
      }
  `
  Footer.afterDOMLoaded = randomScript
  return Footer
}) satisfies QuartzComponentConstructor