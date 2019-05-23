// import toArray      from './commons/to-array'
import filterToDay  from './filter-today-operations'

export default (entities, shouldFilter, day) => filterToDay(shouldFilter, day)(entities).length
