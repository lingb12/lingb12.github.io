import React      from 'react'
import Typography from '@material-ui/core/Typography'
import Button     from '@material-ui/core/Button'
import DialogCont from '@material-ui/core/DialogContent'
import Dialog     from './dialog'
import formatDate from '../utils/commons/format-date'

export default ({ limitDate, open, handleClose, handleSuscribeClick }) => (
  <Dialog {...{open, handleClose, title: 'A propos'}}>
    <DialogCont>

      <Typography paragraph align="justify">
        LINGB est une application web de gestion de stocks et ventes facile à prendre en main.
      </Typography>

      <Typography paragraph align="justify">
        L'application est utilisable sous abonnement mensuel. Et votre abonnement court jusqu' à
        la date du {Boolean(limitDate) ? formatDate(new Date(limitDate)) : '...'}
      </Typography>

      <Typography paragraph>Pour plus d'informations:</Typography>

      <Typography paragraph>+243 89 038 37 94</Typography>

      <div style={{ textAlign: 'right' }}>
        <Button color="primary" variant="contained" onClick={handleSuscribeClick}>Abonner</Button>
      </div>

    </DialogCont>
  </Dialog>
) 
