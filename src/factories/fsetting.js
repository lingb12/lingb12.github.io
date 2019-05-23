import toggle from '../utils/toggle'

export default dispatch => ({
  handleClose: toggle(dispatch, 'SETTING'),
  handleChange: (key, value) => dispatch({ type: 'SET SETTING', payload: { key, value }})
})
