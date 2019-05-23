import { connect }  from 'react-redux'
import Operations   from './component'
import mapDispatch  from './map-dispatch'
import mapState     from './map-state'

export default connect(mapState, mapDispatch)(Operations)