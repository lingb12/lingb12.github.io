import removeFrom   from './core/remove'
import getArticle   from './core/get-art'
import arrayContain from '../../utils/array-contain'
import setIn        from '../../utils/set'
import merge        from '../../utils/merge-object'

export default (state = {}, { type, payload }) => !arrayContain(['ADD ARTICLE', 'ADD UPDATE ARTICLE'], type)
  ? !arrayContain(['ADD ARTICLE AND STOCK', 'ADD ARTICLE AND SALE'], type)
    ? type !== 'REMOVE ARTICLE'
      ? type !== 'ADD PRICE'
        ? type !== 'REMOVE PRICE'
          ? type !== 'OPEN FILE'
            ? state
            : payload.articles
          : setIn(state, payload.art, setIn(state[payload.art], 'prices', removeFrom(state[payload.art]['prices'], payload.qty)))
        : setIn(state, payload.id, setIn(state[payload.id], 'prices', setIn(state[payload.id]['prices'], payload.qty, {q: payload.qty, p: payload.price})))
      : removeFrom(state, payload)
    : setIn(state, payload.artId, getArticle(payload))
  : setIn(state, payload.id, merge(state[payload.id], payload))
  