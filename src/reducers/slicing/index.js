import init from './schema'

export default (state = init, { type, payload }) => type !== 'PAGE CHANGE'
  ? type !== 'PER PAGE CHANGE'
    ? type !== 'TOGGLE FILTER'
      ? state
      : init
    : { ...state, [payload.table]: { currentPage: 0, perPage: payload.perPage }}
  : { ...state, [payload.table]: { ...state[payload.table], currentPage: payload.page }}
  