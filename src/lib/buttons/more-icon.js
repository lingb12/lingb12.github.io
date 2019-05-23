import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreHoriz'

export default ({ handleClick, ...props }) => (
  <IconButton {...props} onClick={handleClick}>
    <MoreIcon />
  </IconButton>
)
