import adddArt      from '../utils/add-art'
import findArt      from '../utils/find-art'
import arrayContain from '../utils/array-contain'

export default store => next => action => arrayContain(['ADD SALE', 'ADD STOCK'], action.type)
  ? next({...action, payload: adddArt(findArt(store.getState(), action.payload.art), action.payload)})
  : next(action)
