import { combineReducers } from 'redux'

import articles   from './articles'
import operations from './operations'

export default combineReducers({
  articles, operations,
})
