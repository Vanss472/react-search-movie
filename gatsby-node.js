/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`)

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/movie/)) {
    page.matchPath = `/movie/*`
    page.component = path.resolve(`src/pages/movie.tsx`)

    // Update the page.
    createPage(page)
  }
}
