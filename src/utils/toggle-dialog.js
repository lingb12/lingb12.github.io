import toggle from './toggle'

export default (dispatch, dialog) => ({
  handleClick: toggle(dispatch, dialog)
})
