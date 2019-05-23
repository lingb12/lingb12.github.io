import dataCard   from '../../../factories/data-card'
import page       from '../../../factories/page'
import SaleStats  from '../../../lib/rows/sale-stats'
import salesStat  from './sales'
import pagination from '../../../factories/pagination'
import subscript  from '../../../factories/subscription'
import set        from '../../../utils/set'
import { statsCount } from './sales'

export default ({ entities, subscription, settings, ui, sorting, core, forms, slicing }) => ({
  pageProps     : page(core, subscript(subscription), forms, ui, settings, 'Chiffre d\'affaire par article', false, entities),
  
  pagerProps    : pagination(slicing, 'salesStats', statsCount(entities.operations, settings)),
  
  saleStatsProps: dataCard('statistiques', undefined, sorting.saleStats.order, sorting.saleStats.orderBy, SaleStats, salesStat(entities.operations, sorting.saleStats, slicing.salesStats, settings.filterDay, settings.currentDate), [
    ['art', 'Article'], ['qty', 'Quantité vendue'], ['mPrice', 'Prix moyen'], ['revenue', 'Chiffre d\'affaire'],
  ], true),

  filter        : set(slicing.salesStats, 'open', ui.filter),
})
