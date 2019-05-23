import React            from 'react'
import Snackbar         from '@material-ui/core/Snackbar'
import SnackbarContent  from '@material-ui/core/SnackbarContent'
// import InfoIcon         from '@material-ui/icons/Info'

const colors = {info: 'darkgreen'}
// const icons = {info: InfoIcon}

export default ({ message, open = false, variant = 'info', handleClose }) => (
  <Snackbar open={open} autoHideDuration={6000}
    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }} onClose={handleClose}>
    <SnackbarContent
      style={{ backgroundColor: colors[variant] }}
      message={message}
    />
  </Snackbar>
)
