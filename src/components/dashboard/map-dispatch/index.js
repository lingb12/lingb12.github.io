import fpage          from '../../../factories/fpage'
import fdataCard      from '../../../factories/fdata-card'
import dialogHandlers from '../../../utils/dialog-handlers'
import fdeleteArt     from '../../../factories/fdelete-art'

import articleMenu    from './article-menu'
import menu           from './menu'
import toggle         from '../../../utils/toggle'

export default dispatch => ({
  fpageProps          : fpage(dispatch, 'APP MENU'),
  fstatsProps         : { handleMoreClick: toggle(dispatch, 'STATS MENU') },
  farticlesDataCard   : fdataCard(dispatch, 'ARTICLE'),
  foperationsDataCard : fdataCard(dispatch, 'STOCK'),
  fsalesDataCard      : fdataCard(dispatch, 'SALE'),
  fdialogs: {
    farticle      : dialogHandlers(dispatch, 'article', 'ARTICLE', 'ARTICLE'),
    fupdateArticle: dialogHandlers(dispatch, 'article', 'UPDATE ARTICLE', 'UPDATE ARTICLE'),
    fstock        : dialogHandlers(dispatch, 'stock', 'STOCK', 'STOCK'),
    fsale         : dialogHandlers(dispatch, 'sale', 'SALE', 'SALE'),
    fartSale      : dialogHandlers(dispatch, 'sale', 'ARTICLE AND SALE', 'ART SALE'),
    fartStock     : dialogHandlers(dispatch, 'stock', 'ARTICLE AND STOCK', 'ART STOCK'),
    fappMenu      : menu(dispatch),
    farticleMenu  : articleMenu(dispatch),
    fstatsMenu    : {fmenuProps: { onClose: toggle(dispatch, 'STATS MENU') }},
    fdeleteArt    : fdeleteArt(dispatch),
  }
})
