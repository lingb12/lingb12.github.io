export default (dispatch, model) => ({
  handleRemove: id => () => dispatch({ type: `REMOVE ${model}`, payload: id })
})
