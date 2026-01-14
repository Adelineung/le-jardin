import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const explorer = Component.Explorer({
        title: "site map", // title of the explorer component
        folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
        folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
        useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
        enableTagsLink: false, // add tags page to explorer
        tagsLinkText: "tags & recent notes",

        // filterFn: (node) => {
        //   // exclude files with the tag "explorerexclude"
        //   return node.data?.tags?.includes("unpublished") !== true
        // },

        // mapFn: (node) => {
        //   if (node.isFolder) {
        //     node.displayName = "" + node.displayName
        //   } else {
        //     // node.displayName = "・ " + node.displayName
        //     node.displayName = "‣ " + node.displayName
        //   }
        
        //  stable
        // mapFn: (node) => {
        //   if (node.isFolder) {
        //     const children = node.children || [];
        //     const fileCount = children.filter(child => !child.isFolder).length;
        //     node.displayName = `${node.displayName} (${fileCount})`;
        //   } else {
        //     node.displayName = "‣ " + node.displayName;
        //   }

        //   node.displayName = node.displayName.toLowerCase()
        //   return node
        // },

        // best :) 
        mapFn: (node) => {
          if (node.isFolder) {
            // Count files using breadth-first approach
            let count = 0;
            const queue = [node];
            
            let current;
            while ((current = queue.shift())) {
              const children = current.children || [];
              for (const child of children) {
                if (child.isFolder) {
                  queue.push(child);
                } else {
                  count++;
                }
              }
            }
            
            node.displayName = `${node.displayName} (${count})`;
          } else {
            if (node.data?.shortname) {
              node.displayName = node.data.shortname  // setter for displayNameOverride
            }
            node.displayName = "‣ " + node.displayName;
          }

          node.displayName = node.displayName.toLowerCase();
          return node;
        },
        
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.ScrollPreservation()],
  footer: Component.Footer()
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    // Component.CollapseHeaders(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: false,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.RandomPageButton(),
    explorer,
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  // beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: false,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.RandomPageButton(),
    explorer,
  ],
  right: [
    Component.RecentNotes(
        {
        title: "Recent Notes", 
        limit: 20,
        showTags: false,
        // linkToMore: false,
      }
    )
  ],
}