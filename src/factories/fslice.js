import toggle from '../utils/toggle'

export const perPageChange = (dispatch, table) => e => dispatch({
  type: 'PER PAGE CHANGE', payload: {table, perPage: e.target.valueAsNumber}
})

export default (dispatch, table) => ({
  handleClose: toggle(dispatch, 'FILTER MENU'),
  handleChange: perPageChange(dispatch, table),
})
