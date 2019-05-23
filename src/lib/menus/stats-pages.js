import React from 'react'
import Menu from '../menu'

export default ({ menuProps, fmenuProps, print, ...props }) => (
  <Menu {...props} {...menuProps} {...fmenuProps} header menuList={[
    ['Imprimer', print.handleClick]
  ]} />
)
