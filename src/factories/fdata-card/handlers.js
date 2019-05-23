import toggle from '../../utils/toggle'

export default (dispatch, togglType, form, frowProps) => ({
  flegendProps: { handleMoreClick: toggle(dispatch, togglType) },
  ftableProps : {
    fcellProps: { handleSort: id => () => dispatch({ type: 'SORT TABLE', payload: { id, form }} )},
    frowProps,
  },
})
