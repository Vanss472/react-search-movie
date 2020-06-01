/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import wrapWithProvider from "./src/state/createStore"
export const wrapRootElement = wrapWithProvider
