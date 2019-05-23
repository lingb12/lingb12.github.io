import arrayContain from '../../utils/array-contain'
import schema       from './schema'

export default (state = schema, { type, payload }) => type !== 'INPUT CHANGE'
  ? type !== 'SELECT ARTICLE'
    ? type !== 'BUY ARTICLE'
      ? type !== 'SET SUBSCRIPTION'
        ? !arrayContain(['ADD ARTICLE', 'ADD UPDATE ARTICLE', 'ADD PRICE'], type)
          ? !arrayContain(['ADD SALE', 'ADD ARTICLE AND SALE'], type)
            ? !arrayContain(['ADD STOCK', 'ADD ARTICLE AND STOCK'], type)
              ? state
              : { ...state, stock: schema.stock }
            : { ...state, sale: schema.sale }
          : { ...state, article: schema.article }
        : {...state, subscribe: schema.subscribe }
      : { ...state, sale: { ...state.sale, art: payload.des }}
    : { ...state, article: payload.article }
  : { ...state, [payload.form]: { ...state[payload.form], [payload.field]: payload.value }}
