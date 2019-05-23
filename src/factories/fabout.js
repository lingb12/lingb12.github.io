import toggle from '../utils/toggle'

export default dispatch => ({
  handleClose         : toggle(dispatch, 'ABOUT'),
  handleSuscribeClick : toggle(dispatch, 'SUBSCRIBE'),
})
