import handlers   from './handlers'
import rowActions from './row-action'

export default (dispatch, type) => ({
  'SALE'            : handlers(dispatch, 'SALE', 'sale', rowActions(dispatch, 'SALE')),
  'STOCK'           : handlers(dispatch, 'STOCK', 'stock', rowActions(dispatch, 'STOCK')),
  'PRICE'           : handlers(dispatch, 'PRICE', 'price', rowActions(dispatch, 'PRICE')),
  'SALES STATS'     : handlers(dispatch, 'SALES STATS', 'saleStats'),
  'OPERATIONS STATS': handlers(dispatch, 'OPERATIONS STATS', 'operationStats'),
  'RESULTS STATS'   : handlers(dispatch, 'RESULTS STATS', 'resultStats'),
  'ARTICLE'         : handlers(dispatch, 'ARTICLE', 'article', {
    handleSelect: article => e => dispatch({ type: 'SELECT ARTICLE', payload: {article, anchor: e.currentTarget }})
  }),
})[type]
