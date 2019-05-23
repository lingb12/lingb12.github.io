import compose  from './commons/compose'
import toArray  from './commons/to-array'
import pluck    from './commons/pluck'
import map      from './commons/map'

export default compose(map(pluck('des')), toArray)
