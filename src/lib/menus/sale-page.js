import React  from 'react'
import Menu   from '../menu'

export default ({ menuProps, fmenuProps, ...props }) => (
  <Menu {...props} {...menuProps} {...fmenuProps} header menuList={[
    ['Ajouter une vente', props.sale.handleClick],
    ['Imprimer les ventes', props.print.handleClick],
  ]} />
)
