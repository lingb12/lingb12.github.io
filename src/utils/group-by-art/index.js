import compose  from '../commons/compose'
import toArray  from '../commons/to-array'
import groupBy    from './group'

export default compose(toArray, groupBy('artId'))
