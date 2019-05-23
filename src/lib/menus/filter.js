import React      from 'react'
import Popover    from '@material-ui/core/Popover'
import TextField  from '@material-ui/core/TextField'

export default ({ open = false, anchor = window.document.getElementById('filter'), ...props }) => (
  <Popover
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} anchorEl={anchor} 
    onClose={props.handleClose}
  >
    <div className="pad-8">
      <TextField type="number" value={props.perPage} onChange={props.handleChange}
        InputProps={{disableUnderline: true }} autoFocus />
    </div>
  </Popover>
)
