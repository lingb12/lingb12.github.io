import compose            from '../../../../utils/commons/compose'
import toArray            from '../../../../utils/commons/to-array'
import sort               from '../../../../utils/commons/sort'
import map                from '../../../../utils/commons/map'
import addCout            from '../../../../utils/add-couts'
import groupByArt         from '../../../../utils/group-by-art'
import toOperationsStats  from './reduce-to-operations'
import slice              from '../../../../utils/commons/slice'

export default (operations, { order, orderBy }, { perPage, currentPage}, shouldFilter, day) => compose(
  slice(perPage * currentPage, perPage * currentPage + perPage),
  sort(order, orderBy),
  arr => arr.filter(({ bCout }) => bCout > 0),
  toOperationsStats,
  map(addCout),
  groupByArt,
  toArray
)(operations)
