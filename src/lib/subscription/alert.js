import React      from 'react'
import Button     from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default ({ message, handleOrder }) => (
  <React.Fragment>
    <div style={{ visibility: 'collapse' }}>
      <Button color="primary" variant="contained" onClick={handleOrder} children="s'abonner" />
    </div>
    <div style={{ color: 'darkred', backgroundColor: '#fff', display: 'flex', alignItems: 'center',
      position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: '0px -2px 8px' }}>
      <div style={{ padding: '0 8px', flex: 'auto' }}>
        <Typography align="justify" color="inherit">{message}</Typography>
      </div>
      <div >
        <Button color="primary" onClick={handleOrder}>S'abonner</Button>
      </div>
    </div>
  </React.Fragment>
)
