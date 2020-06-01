import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import rootReducer from "./reducers"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = reduxCreateStore(rootReducer, composeEnhancers)
  return <Provider store={store}>{element}</Provider>
}
