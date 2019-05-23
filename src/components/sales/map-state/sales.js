import compose from '../../../utils/commons/compose'
import toArray from '../../../utils/commons/to-array'
import filterS from '../../../utils/filter-sales'
import sort    from '../../../utils/commons/sort'
import filterT from '../../../utils/filter-today-operations'
import slice   from '../../../utils/commons/slice'
import map     from '../../..//utils/commons/map'

export const salesCount = (operations, {filterDay, currentDate}) => compose(
  filterS,
  filterT(filterDay, currentDate),
  toArray
)(operations).length

export default (operation, { order, orderBy}, {perPage, currentPage}, {filterDay, currentDate}) => compose(
  slice(currentPage * perPage, currentPage * perPage + perPage),
  sort(order, orderBy),
  map(({ tPrice, qty, ...ob }) => ({ ...ob, tPrice, qty, uPrice: tPrice / qty })),
  filterS,
  filterT(filterDay, currentDate),
  toArray
)(operation)
