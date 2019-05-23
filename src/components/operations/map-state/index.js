import dataCard     from '../../../factories/data-card'
import page         from '../../../factories/page'
import OperationRow from '../../../lib/rows/operation'
import dialogData   from '../../../utils/dialog-data'
import operations   from './operations'
import pagination   from '../../../factories/pagination'
import subscription from '../../../factories/subscription'
import { count } from './operations'

export default ({ core, subscription: sub, entities, forms, ui, settings, sorting, slicing }) => ({
  pageProps       : page(core, subscription(sub), forms, ui, settings, 'Liste des operations', false, entities),

  pagerProps      : pagination(slicing, 'operations', count(entities.operations, settings)),

  operationsProps : dataCard('operations', undefined, sorting.stock.order, sorting.stock.orderBy, OperationRow, operations(entities.operations, sorting.stock, slicing.operations, settings.filterDay, settings.currentDate), [
    ['art', 'Article'], ['code', 'Type'], ['qty', 'Quantité'], ['uCout', 'Cout unitaire'], ['tCout', 'Cout total', 'none'], ['time', 'Date', 'none'], []
  ]),

  dialogs         : {
    stock   : dialogData(ui.stock, forms.stock, entities.articles),
    artStock: dialogData(ui.artStock, forms.stock),
    filter  : { open: ui.filter, ...slicing.operations },
  }
})
