import compose    from '../../../../utils/commons/compose'
import toArray    from '../../../../utils/commons/to-array'
import groupByArt from '../../../../utils/group-by-art'
import filterSale from '../../../../utils/filter-sales'
import toSaleStat from './reduce-to-sale'
import slice      from '../../../../utils/commons/slice'
import sort       from '../../../../utils/commons/sort'
import filterToda from '../../../../utils/filter-today-operations'

export const statsCount = (operations, {filterDay, currentDate}) => compose(
  arr => arr.filter(({ revenue }) => revenue > 0),
  toSaleStat,
  groupByArt,
  filterSale,
  filterToda(filterDay, currentDate),
  toArray
)(operations).length

export default (operations, { order, orderBy}, {perPage, currentPage}, filter, day) => compose(
  slice(perPage * currentPage, perPage * currentPage + perPage),
  sort(order, orderBy),
  arr => arr.filter(({ revenue }) => revenue > 0),
  toSaleStat,
  groupByArt,
  filterSale,
  filterToda(filter, day),
  toArray
)(operations)
