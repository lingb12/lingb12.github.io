import toggleDialog from '../../../utils/toggle-dialog'

export default dispatch => ({
  fmenuProps: { handleClose: () => dispatch({ type: 'TOGGLE APP MENU' }) },
  farticle  : toggleDialog(dispatch, 'ARTICLE'),
  fsale     : toggleDialog(dispatch, 'SALE'),
  fstock    : toggleDialog(dispatch, 'STOCK'),
  fsetting  : toggleDialog(dispatch, 'SETTING'),
  fabout    : toggleDialog(dispatch, 'ABOUT'),
})
