import page       from '../../../factories/page'
import dataCard   from '../../../factories/data-card'
import ArticleRow from '../../../lib/rows/articles'
import dialogData from '../../../utils/dialog-data'
import pagination from '../../../factories/pagination'
import toArray    from '../../../utils/commons/to-array'
import subscript  from '../../../factories/subscription'
import set        from '../../../utils/set'
import deleteArt  from '../../../factories/delete-art'

import articles   from './articles'

export default ({ core, subscription: sub, sorting, entities, ui, settings, forms, slicing }) => ({
  pageProps     : page(core, subscript(sub), forms, ui, settings, 'Liste des articles', false, entities),
  
  pagerProps    : pagination(slicing, 'articles', toArray(entities.articles).length),

  articlesProps : dataCard('articles', undefined, sorting.article.order, sorting.article.orderBy, ArticleRow, articles(entities, sorting.article, slicing.articles), [
    ['des', 'Designation'], ['uPrice', 'Prix unitaire', 'none'], ['salesCount', 'Nbre de ventes'], ['time', 'Derniere modification', 'none'], []
  ]),

  dialogs       : {
    article       : dialogData(ui.article, {model: forms.article}),
    updateArticle : dialogData(ui.updateArticle, {model: forms.article}),
    sale          : dialogData(ui.sale, {model: forms.sale}),
    articleMenu   : { menuProps: {anchorEl: core.select.anchor}, article: core.select.article },
    filter        : set(slicing.articles, 'open', ui.filter),
    confirmDelete : deleteArt(ui, core),
  }
})
