import compose        from '../../../../utils/commons/compose'
import toArray        from '../../../../utils/commons/to-array'
import sort           from '../../../../utils/commons/sort'
import map            from '../../../../utils/commons/map'
import addCout        from '../../../../utils/add-couts'
import groupByArt     from '../../../../utils/group-by-art'
import toResultsStats from './reduce-to-results'
import slice          from '../../../../utils/commons/slice'
import filterForDay   from '../../../../utils/filter-today-operations'

export default (operations, { order, orderBy }, { perPage, currentPage }, shouldFilter, day) => compose(
  slice(perPage * currentPage, perPage * currentPage + perPage),
  sort(order, orderBy),
  arr => arr.filter(({ result }) => result > 0),
  toResultsStats,
  map(filterForDay(shouldFilter, day)),
  map(addCout),
  groupByArt,
  toArray
)(operations)
