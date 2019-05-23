export default dispatch => ({
  fmenuProps  : { onClose: () => dispatch({ type: 'TOGGLE ARTICLE MENU' }) },
  handleDelete: () => dispatch({ type: 'TOGGLE DELETE ART' }),
  handleEdit  : article   => () => dispatch({ type: 'EDIT ARTICLE', payload: article }),
  handleBought: article   => () => dispatch({ type: 'BUY ARTICLE', payload: article }),
})
