import add          from './core/add'
import remove       from './core/remove'
import removeMany   from './core/remove-many'
import getStock     from './core/get-stock'
import arrayContain from '../../utils/array-contain'

export default (state = {}, { type, payload }) => !arrayContain(['REMOVE SALE', 'REMOVE STOCK'], type)
  ? !arrayContain(['ADD STOCK', 'ADD ARTICLE AND STOCK'], type)
    ? !arrayContain(['ADD SALE', 'ADD ARTICLE AND SALE'], type)
      ? type !== 'REMOVE ARTICLE'
        ? type !== 'OPEN FILE'
          ? type !== 'REINIT'
            ? state
            : {}
          : payload.operations
        : removeMany(state, payload)
      : add(state, payload)
    : add(state, getStock(payload))
  : remove(state, payload)
  