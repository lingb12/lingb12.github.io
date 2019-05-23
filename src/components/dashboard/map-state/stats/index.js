import filterForDay from '../../../../utils/filter-today-operations'
import withCouts    from '../../../../utils/with-couts'
import compose      from '../../../../utils/commons/compose'
import statsReducer from './stats-reducer'

export default (operations, shouldFilter, day) => compose(
  statsReducer,
  filterForDay(shouldFilter, day),
  withCouts,
)(operations)
