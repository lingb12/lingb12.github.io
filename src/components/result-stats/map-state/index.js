import dataCard     from '../../../factories/data-card'
import page         from '../../../factories/page'
import ResultStats  from '../../../lib/rows/result-stats'
import resultsStats from './results'
import toArray      from '../../../utils/commons/to-array'
import groupByArtId from '../../../utils/group-by-art'
import pagination   from '../../../factories/pagination'
import subscription from '../../../factories/subscription'
import set          from '../../../utils/set'

export default ({ entities, subscription: sub, ui, settings, sorting, forms, core, slicing }) => ({
  pageProps     : page(core, subscription(sub), forms, ui, settings, 'Resultats par article', false, entities),
  
  pagerProps    : pagination(slicing, 'resultStats', groupByArtId(toArray(entities.operations)).length),

  resultStatsProps: dataCard('statistiques', undefined, sorting.resultStats.order, sorting.resultStats.orderBy, ResultStats, resultsStats(entities.operations, sorting.resultStats, slicing.resultStats, settings.filterDay, settings.currentDate), [
    ['art', 'Article'], ['qty', 'Quantité vendue'], ['revenue', 'Chiffre d\'affaire'], ['cCout', 'Stock vendu'], ['result', 'Resultat'],
  ], true),

  filter        : set(slicing.resultStats, 'open', ui.filter),
})
