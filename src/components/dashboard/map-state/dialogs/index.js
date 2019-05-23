import dialogData from '../../../../utils/dialog-data'
import set        from '../../../../utils/set'
import deleteArt  from '../../../../factories/delete-art'

export default ({ ui, forms, entities, core, settings }) => ({
  updateArticle : dialogData(ui.updateArticle, {model: forms.article}),
  article       : dialogData(ui.article, {model: forms.article}),
  stock         : dialogData(ui.stock, {model: forms.stock}, entities.articles),
  sale          : dialogData(ui.sale, {model: forms.sale}, entities.articles),
  artSale       : dialogData(ui.artSale, {model: forms.sale}),
  artStock      : dialogData(ui.artStock, {model: forms.stock}),
  articleMenu   : {menuProps: { anchorEl: core.select.anchor }, article: core.select.article },
  statsMenu     : {menuProps: { anchor: window.document.getElementById('stats'), open: ui.statsMenu }},
  setting       : set(settings, 'open', ui.setting),
  about         : set({}, 'open', ui.about),
  deleteArt     : deleteArt(ui, core),
})
