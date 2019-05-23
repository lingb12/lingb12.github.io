import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default ({ handleClick, ...props }) => (
  <IconButton {...props} onClick={handleClick}>
    <MoreVertIcon />
  </IconButton>
)
