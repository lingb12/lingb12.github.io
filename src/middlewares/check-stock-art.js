import articleExist from '../utils/article-exist'

export default store => next => action => action.type === 'ADD STOCK' && !articleExist(store.getState(), action.payload.art)
  ? next({ type: 'TOGGLE ART STOCK' })
  : next(action)
  