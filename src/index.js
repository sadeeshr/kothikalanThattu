/**
 * react, react-dom
 */
import React from 'react'
import ReactDOM from 'react-dom'
/**
 * primereact
 */
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'

/**
 * redux, react-redux, redux-thunk, create history
 */
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
/**
 * root reducer
 */
import rootReducer from './reducers'
// import rootReducer from './reducers/auth';

/**
 * register service worker
 */
import registerServiceWorker from './registerServiceWorker'
/**
 * create history
 */
// const router = routerMiddleware(hashHistory);
import routes from './routes';

/**
 * create store
 */

const store = createStore(rootReducer, {}, applyMiddleware(thunk))
// const history = syncHistoryWithStore(hashHistory, store);
/**
 * Main component
 */
const Main = () => {
  return (
    <Provider store={store}>
      {routes}
    </Provider>
  )
}
/**
 * render Main component
 */
ReactDOM.render(<Main />, document.getElementById('root'))

/**
 * register service worker, for future exploration !!
 */
registerServiceWorker()