import { connect } from 'react-redux'
import mapDispatch from './map-dispatch'
import mapState    from './map-state'
import Articles    from './component'

export default connect(mapState, mapDispatch)(Articles)
