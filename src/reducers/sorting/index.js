import schema from './schema'

export default (state = schema, { type, payload }) => type !== 'SORT TABLE'
  ? state
  : { ...state, [payload.form]: { orderBy: payload.id, order: state[payload.form]['order'] === 'desc' ? 'asc' : 'desc' }}
  