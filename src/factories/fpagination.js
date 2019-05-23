export default dispatch => ({
  handlePageChange: payload => () => dispatch({ type: 'PAGE CHANGE', payload }),
  handleFilterClick: () => dispatch({ type: 'TOGGLE FILTER MENU' }),
})
