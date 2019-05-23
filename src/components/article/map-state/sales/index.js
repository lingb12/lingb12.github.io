import compose  from '../../../../utils/commons/compose'
import toArray  from '../../../../utils/commons/to-array'
import addCouts from '../../../../utils/add-couts'
import filter   from './filter'
import reducer  from './reducer'

export default (operations, artId) => compose(
  reducer,
  filter(artId),
  addCouts,
  arr => arr.filter(({ artId: id }) => artId === id),
  toArray
)(operations)
