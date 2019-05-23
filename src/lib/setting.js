import React      from 'react'
import Dialog     from './dialog'
import TextField  from '@material-ui/core/TextField'
import DialogText from '@material-ui/core/DialogContentText'
import Switch     from '@material-ui/core/Switch'
import FormCLabel from '@material-ui/core/FormControlLabel'
import DialogCont from '@material-ui/core/DialogContent'

export default ({ open, handleClose, ...props }) => (
  <Dialog {...{open, handleClose, title: 'Parametres'}}>
    <DialogCont>

      <div style={{ padding: `8px 0` }}>
        <FormCLabel control={<Switch color="primary"
          onChange={(e, checked) => props.handleChange('setOldTime', checked)} />}
          label="Inserer une date differente de la date du terminal"
          checked={props.setOldTime} />
      </div>

      <div style={{ padding: `8px 0`}}>
        <FormCLabel control={<Switch color="primary"
          onChange={(e, checked) => props.handleChange('filterDay', checked)} />}
          label="Ne considerer que les operations de la date en cour" checked={props.filterDay}
        />
      </div>

      <DialogText>Date en cour</DialogText>
      <div>
        <TextField type="date" value={props.currentDate} fullWidth
          onChange={e => props.handleChange('currentDate', e.target.value)} />
      </div>

    </DialogCont>
  </Dialog>
)
