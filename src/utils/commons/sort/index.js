import getSorting from './get-sorting'

export default (order = 'desc', orderBy = 'time') => (arr = []) => arr.sort(getSorting(order, orderBy))
