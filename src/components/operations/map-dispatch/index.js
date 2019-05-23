import fpage          from '../../../factories/fpage'
import fdataCard      from '../../../factories/fdata-card'
import dialogHandlers from '../../../utils/dialog-handlers'
import fpagination    from '../../../factories/fpagination'
import fslice         from '../../../factories/fslice'

export default dispatch => ({
  fpageProps      : fpage(dispatch, 'OPERATION PAGE'),
  fpagerProps     : fpagination(dispatch),
  foperationsProps: fdataCard(dispatch, 'STOCK'),
  fdialogs        : {
    stock   : dialogHandlers(dispatch, 'stock', 'STOCK', 'STOCK'),
    artStock: dialogHandlers(dispatch, 'stock', 'ARTICLE AND STOCK', 'ART STOCK'),
    filter  : fslice(dispatch, 'operations'),
  }
})
