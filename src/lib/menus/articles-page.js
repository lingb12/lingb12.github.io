import React  from 'react'
import Menu   from '../menu'

export default ({ menuProps, fmenuProps, ...props }) => (
  <Menu {...props} {...menuProps} {...fmenuProps} header menuList={[
    ['ajouter un article', props.article.handleClick],
    ['imprimer la liste', props.print.handleClick],
  ]} />
)
