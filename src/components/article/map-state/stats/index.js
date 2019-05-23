import compose  from '../../../../utils/commons/compose'
import toArray  from '../../../../utils/commons/to-array'
import addCouts from '../../../../utils/add-couts'
import filter   from './filter'
import reducer  from './reducer'

export default (operations, id) => compose(reducer, addCouts, filter(id), toArray)(operations)
