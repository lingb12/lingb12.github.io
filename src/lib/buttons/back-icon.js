import React      from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack    from '@material-ui/icons/ArrowBack'

export default () => (
  <IconButton color="inherit" onClick={() => window.history.back()}>
    <ArrowBack />
  </IconButton>
)
