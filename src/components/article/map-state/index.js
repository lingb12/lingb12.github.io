import page       from '../../../factories/page'
import dataCard   from '../../../factories/data-card'
import infos      from '../../../factories/infos'
import subscript  from '../../../factories/subscription'
import dialogData from '../../../utils/dialog-data'

import PriceRow   from '../../../lib/rows/price'
import getGenral  from './general'
import sales      from './sales'
import stats      from './stats'
import prices     from './price'

export default ({ core, entities, forms, ui, settings, subscription: sub }, { match: { params: {id}} }) => ({
  pageProps   : page(core, subscript(sub), forms, ui, settings, 'Informations sur l\'article', false, entities),

  pricesProps : dataCard('Prix en gros', undefined, 'asc', 'qt', PriceRow, prices(entities.articles[id]), [
    ['qt', 'Quantité'], ['price', 'Prix en gros', 'none'], []
  ]),

  statsProps  : { infos: [
    infos('infos generales', getGenral(entities.articles, 1 * id)),
    infos('statistiques sur le stock', stats(entities.operations, 1 * id)),
    infos('statistiques sur les ventes', sales(entities.operations, 1 * id))
  ]},
  
  dialogsProps : {
    edit  : dialogData(ui.updateArticle, {model: forms.article}),
    price : dialogData(ui.price, forms.price),
  }, id,
})
