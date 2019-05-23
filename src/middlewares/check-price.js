export default store => next => action => action.type === 'ADD PRICE' && (action.payload.qty === 0 || action.payload.price === 0)
  ? next({ type: 'INCORRECT PRICE' })
  : next(action)
  