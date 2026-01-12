import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "deeilna",
    pageTitleSuffix: " - deeilna",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "adelineung.github.io/lejardin",
    ignorePatterns: ["private", "templates", ".obsidian",
      // "les rêveries",
    ],
    defaultDateType: "created", // or "modified"
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // header: "Schibsted Grotesk",
        // title: "Onest",
        title: "Inter",
        header: "Inter",
        body: {
            name: "Inter",
            weights: [350, 700],
            includeItalic: true,
          },
        code: "IBM Plex Mono",
        // header: "Inter",
        // body: "Source Sans Pro",
        // code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#4b3518ff",
          tertiary: "#c6af92ff",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#ffbc3688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3870288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
        // priority: ["filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.ImageToolkit(),
    ],
    filters: [Plugin.RemoveDrafts(),
              Plugin.RemoveTags({ excludedTags: ["unpublished", "private"] }),
              // Plugin.RemoveTags({ includedTags: ["personal", "unpublished", "private"] , excludedTags: []}),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      // Plugin.Favicon(), 
      Plugin.EmojiFavicon({ emoji: "🧣" }), // 🦉 🎄 🔮 🌸 🍀

      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
