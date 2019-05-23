import React    from 'react'
import { Link } from 'react-router-dom'
import Menu     from '@material-ui/core/Menu'
import MenuItem from '../menu/menu-item'

export default ({ menuProps, fmenuProps }) => (
  <Menu anchorEl={document.getElementById('stats')} disableAutoFocusItem {...menuProps} {...fmenuProps}>
    <MenuItem text="Stats sur les ventes" handleClick={fmenuProps.onClose} to={'/ventes-stats'} component={Link} />
    <MenuItem text="Stats sur les stock" handleClick={fmenuProps.onClose} to={'/operations-stats'} component={Link} />
    <MenuItem text="Stats sur les resultat" handleClick={fmenuProps.onClose} to={'/resultats-stats'} component={Link} />
  </Menu>
)
