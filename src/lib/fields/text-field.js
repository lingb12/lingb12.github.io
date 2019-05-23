import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({ value, handleChange, ...props }) => (
  <TextField
    {...props}
    value={value} required
    fullWidth margin="dense" onChange={handleChange}
  />
)
