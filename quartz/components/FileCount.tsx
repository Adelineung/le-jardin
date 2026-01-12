import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const FileCount: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
    const totalFiles = allFiles?.length ?? 0
    if (totalFiles === 0) return null
    
    return (
      <div class="file-count-footer">
        <p>Total notes: {totalFiles}</p>
      </div>
    )
  }

  FileCount.css = `
  .file-count-footer {
    text-align: center;
    margin-bottom: 1rem;
    color: var(--gray);
    font-size: 0.9rem;
  }
  `

  return FileCount
}) satisfies QuartzComponentConstructor