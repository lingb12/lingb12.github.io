import { connect }  from 'react-redux'
import SalesStats   from './component'
import mapDispatch  from './map-dispatch'
import mapState     from './map-state'

export default connect(mapState, mapDispatch)(SalesStats)
