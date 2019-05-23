import React from 'react'
import AppBar         from '@material-ui/core/AppBar'
import Typography     from '@material-ui/core/Typography'

import BackIcon       from './buttons/back-icon'
import DashboardIcon  from './buttons/dashboard-icon'
import MoreVertIcon   from './buttons/more-vert-icon'


export default ({ dashboard = false, handleMoreClick, title }) => (
  <React.Fragment>
    
    <AppBar position="fixed">

      <div className="flex-center-items toolbar">
        {dashboard ? <DashboardIcon /> : <BackIcon />}
        <Typography noWrap variant="headline" color="inherit">{title}</Typography>
        <div className="spacer" />
        <MoreVertIcon id="menu" color="inherit" handleClick={handleMoreClick} />
      </div>

    </AppBar>

    <div style={{ height: 64 }} />

  </React.Fragment>
)
