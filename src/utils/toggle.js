export default (dispatch, type) => () => dispatch({ type: `TOGGLE ${type}` })
