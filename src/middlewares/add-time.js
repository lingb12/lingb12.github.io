import arrayContain from '../utils/array-contain'
import withTime     from '../utils/with-time'

export const types = [
  'ADD SALE', 'ADD STOCK', 'ADD ARTICLE', 'ADD ARTICLE AND SALE', 'ADD ARTICLE AND STOCK'
]

export default store => next => action => !arrayContain(types, action.type)
  ? next(action)
  : next({ ...action, payload: withTime(action.payload, action.type, store.getState()) })
