import value from './input-value'

export default (dispatch, form) => field => event => dispatch({
  type: 'INPUT CHANGE',
  payload: {
    form, field,
    value: value(field, event),
  }
})
