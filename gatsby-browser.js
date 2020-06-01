/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapWithProvider from "./src/state/createStore"
export const wrapRootElement = wrapWithProvider
