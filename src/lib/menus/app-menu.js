import React from 'react'
import Menu from '../menu'

export default ({ fmenuProps, menuProps, farticle, fstock, fsale, ...props }) => (
  <Menu {...props} {...fmenuProps} {...menuProps} header menuList={[
    ['Ajouter un article', farticle.handleClick],
    ['Ajouter un achat', fstock.handleClick],
    ['Ajouter une vente', fsale.handleClick],
  ]}
  />
)
