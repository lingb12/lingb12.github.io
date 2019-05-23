import compose    from '../../../utils/commons/compose'
import sort       from '../../../utils/commons/sort'
import slice      from '../../../utils/commons/slice'
import withCouts  from '../../../utils/with-couts'
import filterToDay from '../../../utils/filter-today-operations'

export const count = (operations, {filterDay, currentDate}) => compose(
  filterToDay(filterDay, currentDate),
  withCouts
)(operations).length

export default (operations, {order, orderBy}, {perPage, currentPage}, filter, day) => compose(
  slice(currentPage * perPage, currentPage * perPage + perPage),
  sort(order, orderBy),
  filterToDay(filter, day),
  withCouts
)(operations)
