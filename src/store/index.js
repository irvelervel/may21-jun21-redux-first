import { createStore } from 'redux'
import { mainReducer } from '../reducers'

// createStore can take 3 parameters:
// 1) the main reducer function
// 2) the initial state of the application
// 3) an enhancer function, this is usually for external plugins/extensions

export const initialState = { count: 0 }

const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
