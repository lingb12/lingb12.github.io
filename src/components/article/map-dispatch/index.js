import fpage          from '../../../factories/fpage'
import fdataCard      from '../../../factories/fdata-card'
import dialogHandlers from '../../../utils/dialog-handlers'

export default (dispatch, {match: {params: {id}}}) => ({
  fpageProps    : fpage(dispatch, 'ARTICLE PAGE'),
  fpricesProps  : fdataCard(dispatch, 'PRICE'),
  fdialogsProps : {
    edit  : dialogHandlers(dispatch, 'article', 'UPDATE ARTICLE', 'UPDATE ARTICLE'),
    price : {
      ...dialogHandlers(dispatch, 'price', 'PRICE', 'PRICE'),
      handleSubmit: () => dispatch((disp, getState) => disp({ type: 'ADD PRICE', payload: {...getState().forms.price, id: id * 1}}))
    },
  }
})
