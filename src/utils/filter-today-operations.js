import isSameDay from './is-same-day'

export default (shouldFilter, day) => (ops = []) => shouldFilter
  ? ops.filter(({ time }) => isSameDay(new Date(time), new Date(day)))
  : ops
  