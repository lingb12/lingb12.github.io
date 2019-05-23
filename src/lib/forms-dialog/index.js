import React          from 'react'
import DialogContent  from '@material-ui/core/DialogContent'
import DialogActions  from '@material-ui/core/DialogActions'
import Divider        from '@material-ui/core/Divider'
import Dialog         from '../dialog'
import SubmitButton   from '../buttons/submit-button'

export default ({ children, handleSubmit, ...props }) => (
  <Dialog {...props}>
    <form onSubmit={e => {e.preventDefault(); handleSubmit()}}>
      <DialogContent>
        {children}
      </DialogContent>
      <Divider />
      <DialogActions>
        <div style={{ paddingRight: 16 }}>
          <SubmitButton label="enregistrer" />
        </div>
      </DialogActions>
    </form>
  </Dialog>
)
