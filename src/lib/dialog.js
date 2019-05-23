import React        from 'react'
import Dialog       from '@material-ui/core/Dialog'
import DialogTitle  from '@material-ui/core/DialogTitle'
import Divider      from '@material-ui/core/Divider'
import Fade         from '@material-ui/core/Fade'

export default ({ children, open, title, handleClose }) => (
  <Dialog open={open} onClose={handleClose} maxWidth="xs" scroll="body"
    TransitionComponent={Fade}>
    <DialogTitle>{title}</DialogTitle>
    <Divider />
    {children}
  </Dialog>
)
