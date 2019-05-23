import articleExist from '../utils/article-exist'

export default store => next => action => action.type === 'ADD SALE' && !articleExist(store.getState(), action.payload.art)
  ? next({ type: 'TOGGLE ART SALE' })
  : next(action)
