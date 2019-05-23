export const saveSubscription = (next, action) => {
  let result = next(action)
  localStorage.setItem('lingb-sub', JSON.stringify(Date.parse(action.payload.limitDate)))
  return result
}

export default store => next => action => action.type !== 'SET SUBSCRIPTION'
  ? next(action)
  : saveSubscription(next, action)
