import fdataCard      from '../../../factories/fdata-card'
import fpage          from '../../../factories/fpage'
import dialogHandlers from '../../../utils/dialog-handlers'
import fpagination    from '../../../factories/fpagination'
import fslice         from '../../../factories/fslice'

export default dispatch => ({
  fpageProps  : fpage(dispatch, 'SALE PAGE'),
  fpagerProps : fpagination(dispatch),
  fsalesProps : fdataCard(dispatch, 'SALE'),
  fdialogs    : {
    sale: dialogHandlers(dispatch, 'sale', 'SALE', 'SALE'),
    artSale: dialogHandlers(dispatch, 'sale', 'ARTICLE AND SALE', 'ART SALE'),
    filter: fslice(dispatch, 'sales'),
  }
})
