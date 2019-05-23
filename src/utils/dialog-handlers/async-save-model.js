import saveModel from './save-model'

export default (type, key) => (dispatch, getState) => dispatch(saveModel(type, key, getState()))
