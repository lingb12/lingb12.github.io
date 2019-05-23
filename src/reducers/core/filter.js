export default (state = false, { type }) => type !== 'TOGGLE FILTER'
  ? state
  : !state
  