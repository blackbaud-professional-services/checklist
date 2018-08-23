import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import checklist from './checklist'
import categories from './categories'

const middleware = process.env.NODE_ENV === 'production'
  ? [thunk]
  : [thunk, createLogger()]

export default (initialState = {}) => (
  createStore(
    combineReducers({
      categories,
      checklist
    }),
    initialState,
    applyMiddleware(...middleware)
  )
)
