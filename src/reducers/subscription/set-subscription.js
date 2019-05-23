import set from '../../utils/set'
import sha1 from '../../utils/sha1'

export default (state, { code, limitDate }) => state.code === sha1(code)
  ? set(state, 'limitDate', limitDate)
  : state
