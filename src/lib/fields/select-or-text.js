import React      from 'react'
import TextField  from '@material-ui/core/TextField'

export default ({ value, listId, options = [], handleChange, ...props }) => (
  <React.Fragment>
    <TextField
      {...props}
      value={value} required inputProps={{ list: listId }}
      fullWidth margin="dense" onChange={handleChange}
    />
    <datalist id={listId}>
      {options.map((val, k) => <option key={k} value={val} />)}
    </datalist>
  </React.Fragment>
)
