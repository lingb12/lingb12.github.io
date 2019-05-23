import React  from 'react'
import Menu   from '../menu'

export default ({ menuProps, fmenuProps, ...props }) => (
  <Menu {...props} {...menuProps} {...fmenuProps} header menuList={[
    ['Ajouter un achat', props.bought.handleClick],
    ['Imprimer les operations', props.print.handleClick],
  ]} />
)
