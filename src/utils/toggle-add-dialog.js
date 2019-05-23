import toggleDialog from './toggle-dialog'

export default (dispatch, dialog) => ({
  add: toggleDialog(dispatch, dialog),
})
