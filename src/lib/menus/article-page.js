import React  from 'react'
import Menu   from '../menu'

export default ({ fmenuProps, menuProps, fedit, fprice, fprint, ...props }) => (
  <Menu {...props} {...fmenuProps} {...menuProps} header menuList={[
    ['Editer l\'article', fedit.handleClick],
    ['Ajouter un prix', fprice.handleClick],
    ['Imprimer le fiche', fprint.handleClick],
  ]} />
)
