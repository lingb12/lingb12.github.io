import toggle from '../utils/toggle'

export const del = dispatch => id => () => dispatch({ type: 'REMOVE ARTICLE', payload: id })

export default dispatch => ({
  handleDeleteClick : del(dispatch),
  handleClose       : toggle(dispatch, 'DELETE ART'),
})
