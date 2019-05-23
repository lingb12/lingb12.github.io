import React    from 'react'
import { Link } from 'react-router-dom'
import Menu     from '@material-ui/core/Menu'
import MenuItem from '../menu/menu-item'
import EditIcon from '@material-ui/icons/Edit'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import Delete   from '@material-ui/icons/Delete'
import Details  from '@material-ui/icons/Details'

export default ({ menuProps, fmenuProps, handleEdit, handleDelete, handleBought, article = {}}) => (
  <Menu {...fmenuProps} {...menuProps} open={Boolean(menuProps.anchorEl)} disableAutoFocusItem>
    <MenuItem text="Vendre" Icon={AddShoppingCart} handleClick={handleBought(article)} />
    <MenuItem text="Editer" Icon={EditIcon} handleClick={handleEdit(article)} />
    <MenuItem text="Supprimer" Icon={Delete} handleClick={handleDelete} />
    <MenuItem text="Details" Icon={Details} handleClick={fmenuProps.onClose} {...{component: Link, to: `/articles/${article.id}`}} />
  </Menu>
)
