import types        from './types'
import map          from './map'
import arrayContain from '../../../utils/array-contain'

export default (state = {}, { type }) => !arrayContain(types, type)
  ? type !== 'TOGGLE NOTIFICATION'
    ? state
    : { ...state, open: !state.open }
  : map[type]
