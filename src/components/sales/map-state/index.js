import page       from '../../../factories/page'
import dataCard   from '../../../factories/data-card'
import dialogData from '../../../utils/dialog-data'
import SaleRow    from '../../../lib/rows/sale'
import sales      from './sales'
import pagination from '../../../factories/pagination'
import subscript  from '../../../factories/subscription'
import { salesCount } from './sales'

export default ({ core, subscription, entities, settings, ui, forms, sorting, slicing }) => ({
  pageProps : page(core, subscript(subscription), forms, ui, settings, 'Liste de ventes', false, entities),
  
  pagerProps: pagination(slicing, 'sales', salesCount(entities.operations, settings)),

  salesProps: dataCard('liste de ventes', undefined, sorting.sale.order, sorting.sale.orderBy, SaleRow, sales(entities.operations, sorting.sale, slicing.sales, settings), [
    ['art', 'Article'], ['qty', 'Quantité'], ['uPrice', 'Prix unitaire'], ['tPrice', 'Prix total', 'none'], [undefined, undefined, 'none'], ['time', 'Date', 'none'], []
  ]),

  dialogs   : {
    sale    : dialogData(ui.sale, {model: forms.sale}, entities.articles),
    artSale : dialogData(ui.artSale, {model: forms.sale}),
    filter  : { open: ui.filter, ...slicing.sales },
  }
})
