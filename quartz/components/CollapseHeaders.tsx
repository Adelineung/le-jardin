import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/collapseHeaders.scss"

// @ts-ignore
import script from "./scripts/collapseHeaders.inline"

interface Options {}

const defaultOptions: Options = {}

export default ((opts?: Partial<Options>) => {
  const CollapseHeaders: QuartzComponent = ({ }: QuartzComponentProps) => {
    return null // This component doesn't render anything visible, it just adds behavior
  }

  CollapseHeaders.css = style
  CollapseHeaders.afterDOMLoaded = script
  
  return CollapseHeaders
}) satisfies QuartzComponentConstructor