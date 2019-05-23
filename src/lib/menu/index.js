import React    from 'react'
import Menu     from '@material-ui/core/Menu'
import Divider  from '@material-ui/core/Divider'
import Backup   from '@material-ui/icons/Backup'
import Open     from '@material-ui/icons/OpenInBrowser'
import Info     from '@material-ui/icons/Info'
import Settings from '@material-ui/icons/Settings'
import Star     from '@material-ui/icons/Star'

import MenuItem from './menu-item'

export const reader = new FileReader()
export const openFile = open => ({ target }) => {
  reader.onload = () => open(reader.result)
  reader.readAsText(target.files[0])
}

export default ({ open, handleClose, ...props }) => (
  <React.Fragment>
    <Menu {...{open, onClose: handleClose, anchorEl: document.getElementById('menu')}} disableAutoFocusItem>

      <MenuItem text="Sauvegarder" handleClick={props.fbackup} Icon={Backup} />
      <MenuItem text="Ouvrir" {...props.fopen} Icon={Open} />

      <Divider />

      <MenuItem {...props.freinit} text="Reinitialiser" Icon={Star} />
      <Divider />

      <MenuItem {...props.fsetting} text="Configuration" Icon={Settings} />
      <MenuItem {...props.fabout}  text="A propos" Icon={Info} />

    </Menu>
  </React.Fragment>
)
