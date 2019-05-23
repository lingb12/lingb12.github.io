import React      from 'react'
import TextField  from '@material-ui/core/TextField'

export default ({ value, options = [], handleChange, ...props }) => (
  <TextField
    {...props}
    type="select" value={value} required
    selectProps={{ native: true }}
    fullWidth margin="dense" onChange={handleChange}
  >
    {options.map(([val, label], k) => <option key={k} value={val}>{label}</option>)}
  </TextField>
)
