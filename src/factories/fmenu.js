import toggleDialog from '../utils/toggle-dialog'

export default (dispatch, menuProps) => ({
  fabout  : toggleDialog(dispatch, 'ABOUT'),
  fsetting: toggleDialog(dispatch, 'SETTING'),
  ...menuProps
})
