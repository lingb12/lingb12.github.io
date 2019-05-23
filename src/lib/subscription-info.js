import React      from 'react'
import Dialog     from './dialog'
import Typography from '@material-ui/core/Typography'
import DialogCont from '@material-ui/core/DialogContent'

export default props => (
  <Dialog {...props} title="Contact">
    <DialogCont>
      <Typography paragraph align="justify">
        Pour se (re)abonner,
        envoyez nous un sms, contenant addresse (votre commune, avenue, numero)
        et nous viendrons vite vous reabonner
      </Typography>

      <Typography>Tel: +243 89 038 37 94</Typography>
    </DialogCont>
  </Dialog>
)
