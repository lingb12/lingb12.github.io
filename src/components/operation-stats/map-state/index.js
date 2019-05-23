import dataCard         from '../../../factories/data-card'
import page             from '../../../factories/page'
import OperationStats   from '../../../lib/rows/operation-stats'
import operationsStats  from './operations'
import pagination       from '../../../factories/pagination'
import toArray          from '../../../utils/commons/to-array'
import groupByArtId     from '../../../utils/group-by-art'
import subscription     from '../../../factories/subscription'
import set              from '../../../utils/set'

export default ({ entities, subscription: sub, ui, sorting, forms, settings, core, slicing }) => ({
  pageProps     : page(core, subscription(sub), forms, ui, settings, 'Etat des stocks par article', false, entities),
  
  pagerProps    : pagination(slicing, 'operationsStats', groupByArtId(toArray(entities.operations)).length),

  operationStatsProps: dataCard('statistiques', undefined, sorting.operationStats.order, sorting.operationStats.orderBy, OperationStats, operationsStats(entities.operations, sorting.operationStats, slicing.operationsStats, settings.filterDay, settings.currentDate), [
    ['art', 'Article'], ['qty', 'Quantité restante'], ['bCout', 'Stock acheté'], ['cCout', 'Stock vendu'], ['rCout', 'Stock restant'],
  ], true),

  filter        : set(slicing.operationsStats, 'open', ui.filter),
})
