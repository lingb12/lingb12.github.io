import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import middlewares from './middlewares'

export const state = () => JSON.parse(localStorage.getItem('lingb-data')) || {}

export default createStore(rootReducer, state(), applyMiddleware(
  createLogger(), thunk, ...middlewares,
))
