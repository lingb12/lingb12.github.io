import toArray  from '../../../utils/commons/to-array'
import compose  from '../../../utils/commons/compose'
import sort     from '../../../utils/commons/sort'
import slice    from '../../../utils/commons/slice'

export const addSalesCount = (ops = []) => (arr = []) => arr.map(item => ({
  ...item,
  salesCount: ops.reduce((acc, {code, artId}) => code === 1 && artId === item.id ? acc + 1 : acc, 0)
}))

export default ({articles, operations}, {order, orderBy}, {perPage, currentPage}) => compose(
  slice(perPage * currentPage, perPage * currentPage + perPage),
  sort(order, orderBy),
  addSalesCount(toArray(operations)),
  toArray
)(articles)
