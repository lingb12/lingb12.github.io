import asyncSaveModel from './async-save-model'
import toggle         from '../toggle'
import inputChange    from '../input-change'

export default (dispatch, model, saveType, toggleType) => ({
  handleChange: inputChange(dispatch, model),
  handleClose : toggle(dispatch, toggleType),
  handleSubmit: () => dispatch(asyncSaveModel(saveType, model)),
})
