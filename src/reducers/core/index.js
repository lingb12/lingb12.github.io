import { combineReducers } from 'redux'

import notification from './notification'
import select       from './select'
import filter       from './filter'

export default combineReducers({
  filter, notification, select,
})
