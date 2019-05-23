import React    from 'react'
import Button   from '@material-ui/core/Button'
import Dialog   from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

export default ({ open, onClose, onConfirm }) => (
  <Dialog maxWidth="xs" {...{open, onClose}}>
    <DialogContent>
      <DialogContentText align="justify" color="secondary">
        La reinitialisation consiste à effacer toutes les operation
        (ventes et achats) de votre application, voulez-vous reinitialiser ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <div className="pad-8">
        <Button variant="contained" color="primary" onClick={onConfirm}>Confirmer</Button>
      </div>
    </DialogActions>
  </Dialog>
)
