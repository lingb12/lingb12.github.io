import compose    from '../../../utils/commons/compose'
import toArray    from '../../../utils/commons/to-array'
import slice      from '../../../utils/commons/slice'
import sort       from '../../../utils/commons/sort'

export const addSalesCount = (ops = []) => (arr = []) => arr.map(item => ({
  ...item,
  salesCount: ops.reduce((acc, {code, artId}) => code === 1 && artId === item.id ? acc + 1 : acc, 0)
}))

export default ({ articles, operations }) => compose(
  slice(0, 3),
  sort('desc', 'salesCount'),
  addSalesCount(toArray(operations)),
  toArray
)(articles)
