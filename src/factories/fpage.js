import fsubscription  from './fsubscription'
import toggle         from '../utils/toggle'
import toggleDialog   from '../utils/toggle-dialog'
import inputChange    from '../utils/input-change'
import fsetting       from './fsetting'
import fabout         from './fabout'

export const entities = ({ entities }) => entities
export const toBackup = data => URL.createObjectURL(new Blob([JSON.stringify(data)]))
export const backup = d => () => d((dispatch, getState) => {
  let anchor = document.createElement('a')
  anchor.download = 'backup.json'
  anchor.href = toBackup(entities(getState()))
  anchor.click()
  dispatch({type: 'BACKUP'})
})

const parse = json => {
  try {
    return JSON.parse(json)
  } catch(e) {
    return undefined
  }
}

export const readFile = (dispatch, target) => {
  const fileReader = new FileReader()
  fileReader.onload = () => {
    return Boolean(parse(fileReader.result))
      ? dispatch({ type: 'OPEN FILE', payload: JSON.parse(fileReader.result)})
      : dispatch({ type: 'FILE ERROR' })
  }
  fileReader.readAsText(target.files[0])
}

export const openFile = d => () => {
  let input = document.createElement('input')
  input.type = 'file'
  input.accept = 'application/json'
  d(dispatch => {
    input.onchange = ({ target }) => readFile(dispatch, target)
  })
  input.click()
}

export const submitSubscription = dispatch => form => () =>
  dispatch({ type: 'SET SUBSCRIPTION', payload: form })

export default (dispatch, menu) => ({
  fheaderProps: {
    handleMoreClick: toggle(dispatch, 'APP MENU'),
  },
  fnotificationProps: {
    handleClose: toggle(dispatch, 'NOTIFICATION')
  },
  fsubscriptionProps: fsubscription(dispatch),
  faboutProps: fabout(dispatch),
  fsubscribeProps: {
    handleClose : toggle(dispatch, 'SUBSCRIBE'),
    handleChange: inputChange(dispatch, 'subscribe'),
    handleSubmit: submitSubscription(dispatch),
  },
  finfoProps: {
    handleClose: toggle(dispatch, 'INFO')
  },
  fsettingProps: fsetting(dispatch),
  fappMenuProps: {
    handleClose: toggle(dispatch, 'APP MENU'),
    fabout: toggleDialog(dispatch, 'ABOUT'),
    fbackup: backup(dispatch),
    fopen: {handleClick: openFile(dispatch)},
    fsetting: toggleDialog(dispatch, 'SETTING'),
    freinit: toggleDialog(dispatch, 'CONFIRM REINIT')
  },
  fconfirmReinit: {
    onClose: toggle(dispatch, 'CONFIRM REINIT'),
    onConfirm: () => dispatch({ type: 'REINIT' }),
  }
})
