import compose    from '../../../utils/commons/compose'
import slice      from '../../../utils/commons/slice'
import descByTime from '../../../utils/desc-by-time'
import withCouts  from '../../../utils/with-couts'
import filterForDay from '../../../utils/filter-today-operations'

export default (operations, shouldFilter, day) => compose(
  slice(0, 3),
  descByTime,
  filterForDay(shouldFilter, day),
  withCouts
)(operations)
