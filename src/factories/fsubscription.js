import toggle from '../utils/toggle'

export default dispatch => ({
  handleSuscribe: toggle(dispatch, 'SUBSCRIBE'),
  handleOrder   : toggle(dispatch, 'INFO'),
})
