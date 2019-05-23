import compose    from './commons/compose'
import toArray    from './commons/to-array'
import map        from './commons/map'
import flat       from './commons/flat'
import groupByArt from './group-by-art'
import addCouts   from './add-couts'

export default compose(flat, map(addCouts), groupByArt, toArray)
