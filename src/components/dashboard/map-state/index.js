import Articles   from '../../../lib/rows/articles'
import Operation  from '../../../lib/rows/operation'
import Sale       from '../../../lib/rows/sale'

import articles   from './articles'
import operations from './operations'
import sales      from './sales'
import statsData  from './stats'

import dataCard   from '../../../factories/data-card'
import stats      from '../../../factories/stats'
import page       from '../../../factories/page'
import subscript  from '../../../factories/subscription'

import dialogs    from './dialogs'

export default ({ core, entities, forms, ui, subscription, settings }) => ({
  pageProps: page(core, subscript(subscription), forms, ui, settings, 'Tableau de bord', true, entities),

  statsProps: stats('/stats', statsData(entities.operations, settings.filterDay, settings.currentDate)),

  articlesDataCard: dataCard('liste des articles', '/articles', 'desc', 'time', Articles, articles(entities), [
    ['des', 'Designation'], ['uPrice', 'Prix', 'none'], ['salesCount', 'Nbre de vente'], ['time', 'Derniere modification', 'none'], ['', '', 'none']
  ]),

  operationsDataCard: dataCard('liste des operations', '/operations', 'desc', 'time', Operation, operations(entities.operations, settings.filterDay, settings.currentDate), [
    ['art', 'Article'], ['type', 'Type'], ['qty', 'Quantité'], ['uCout', 'Cout unitaire'],
    ['tCout', 'Cout total', 'none'], ['time', 'Date exacte', 'none'], ['', '', 'none']
  ]),

  salesDataCard: dataCard('liste des ventes', '/ventes', 'desc', 'time', Sale, sales(entities.operations, settings.filterDay, settings.currentDate), [
    ['art', 'Article'], ['qty', 'Quantité'], ['uPrice', 'Prix unitaire'], 
    ['tPrice', 'Prix total', 'none'], [undefined, undefined, 'none'], ['time', 'Date', 'none'], []
  ]),

  dialogs     : dialogs({ ui, forms, entities, core, settings, }),
})
