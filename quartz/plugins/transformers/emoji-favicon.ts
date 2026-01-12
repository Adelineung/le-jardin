import { QuartzEmitterPlugin } from "../types"
import { write } from "../emitters/helpers"
import { BuildCtx } from "../../util/ctx"
import { FullSlug } from "../../util/path"

// <text x="50" y="55" font-size="90" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
// <rect width="95" height="95" x="3" y="3" rx="16" fill="#ffffff57"/>
// <text x="50" y="60" font-size="85" text-anchor="middle" dominant-baseline="middle">${opts.emoji}</text>

interface Options {
  emoji: string
}

export const EmojiFavicon: QuartzEmitterPlugin<Options> = (userOpts?: Partial<Options>) => {
  const opts: Options = {
    emoji: "🌱", // default emoji
    ...userOpts,
  }
  
  return {
    name: "EmojiFavicon",
    async *emit({ argv }) {
      const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <text x="50" y=".9em" font-size="90" text-anchor="middle">${opts.emoji}</text>
</svg>`

      yield write({
        ctx: { argv } as BuildCtx,
        slug: "favicon" as FullSlug,
        ext: ".svg",
        content: Buffer.from(svgContent),
      })
    },
    async *partialEmit() {},
  }
}