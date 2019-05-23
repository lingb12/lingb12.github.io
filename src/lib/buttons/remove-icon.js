import React      from 'react'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon    from '@material-ui/icons/RemoveCircleOutlineTwoTone'

export default ({ handleClick }) => (
  <IconButton color="secondary" onClick={handleClick}>
    <RemoveIcon />
  </IconButton>
)
