export default (dispatch, key, value) => dispatch({
  type: 'SET SETTING', payload: { key, value }
})
