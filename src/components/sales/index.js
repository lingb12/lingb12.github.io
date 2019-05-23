import { connect }  from 'react-redux'
import Sales        from './component'
import mapDispatch  from './map-dispatch'
import mapState     from './map-state'

export default connect(mapState, mapDispatch)(Sales)
