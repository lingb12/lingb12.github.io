import fpage          from '../../../factories/fpage'
import fdataCard      from '../../../factories/fdata-card'
import dialogHandlers from '../../../utils/dialog-handlers'
import fpagination    from '../../../factories/fpagination'
import fslice         from '../../../factories/fslice'
import fdeleteArt     from '../../../factories/fdelete-art'

import articleMenu    from '../../dashboard/map-dispatch/article-menu'

export default dispatch => ({
  fpageProps    : fpage(dispatch, 'APP MENU'),
  fpagerProps   : fpagination(dispatch),
  farticlesProps: fdataCard(dispatch, 'ARTICLE'),
  fdialogs      : {
    article       : dialogHandlers(dispatch, 'article', 'ARTICLE', 'ARTICLE'),
    updateArticle : dialogHandlers(dispatch, 'article', 'UPDATE ARTICLE', 'UPDATE ARTICLE'),
    sale          : dialogHandlers(dispatch, 'sale', 'SALE', 'SALE'),
    filter        : fslice(dispatch, 'articles'),
    articleMenu   : articleMenu(dispatch),
    fconfirmDelete: fdeleteArt(dispatch),
  }
})
