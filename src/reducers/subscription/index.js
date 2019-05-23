import set              from '../../utils/set'
import init             from './init'
import setSubscription  from './set-subscription'

export const setFirstVisit = (state = init) => Boolean(state.firstVisit)
  ? state
  : set(state, 'firstVisit', Date.now())

export default (state = init, { type, payload }) => type !== 'SET FIRST VISIT'
  ? type !== 'SET SUBSCRIPTION'
    ? state
    : setSubscription(state, payload)
  : setFirstVisit(state)
