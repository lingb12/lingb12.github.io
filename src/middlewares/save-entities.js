export const toSave = ({ entities, subscription, settings }) => ({ entities, subscription, settings })

export const save = (getState, result) => {
  localStorage.setItem('lingb-data', JSON.stringify(toSave(getState())))
  
  return result
}

export const saveEntities = ({ getState }, next, action) => save(getState, next(action))

export default store => next => action => saveEntities(store, next, action)
