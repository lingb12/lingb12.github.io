import { combineReducers } from 'redux'

import core         from './core'
import entities     from './entities'
import forms        from './forms'
import settings     from './settings'
import slicing      from './slicing'
import sorting      from './sorting'
import subscription from './subscription'
import ui           from './ui'

export default combineReducers({
  core, entities, forms, slicing, sorting, subscription, ui, settings
})
