import React        from 'react'
import MenuItem     from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Bookmark     from '@material-ui/icons/Bookmark'

export default ({ Icon = Bookmark, text, handleClick, ...props }) => (
  <MenuItem {...props} onClick={handleClick}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </MenuItem>
)
