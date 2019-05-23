import compose    from '../commons/compose'
import head       from '../commons/head'
import ascByTime  from '../asc-by-time'
import calcCouts  from './calc-couts'

export default compose(head, calcCouts, ascByTime)
