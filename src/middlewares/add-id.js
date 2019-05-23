import withId from '../utils/with-id'

export default store => next => action => next(withId(action, store.getState()))
