import React      from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddIcon    from '@material-ui/icons/Add'

export default ({ handleClick }) => (
  <IconButton onClick={handleClick}>
    <AddIcon />
  </IconButton>
)
