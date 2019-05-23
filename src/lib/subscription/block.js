import React      from 'react'
import Button     from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default ({ expired = false, handleSubscribe, handleOrder }) => (
  <div style={{ display: 'flex', padding: 16, position: 'fixed', top: 0, left: 0, right: 0,
    zIndex: 1200, bottom: 0, backgroundColor: '#fff',
    flexDirection: 'column', justifyContent: 'center' }}>

    <Typography color="secondary" align="justify" paragraph>
      {expired ? 'Votre abonnement a expiré' : 'La periode d\'essai est depassée'}
    </Typography>

    <Typography color="primary" align="justify" paragraph>
      Commandez un abonnement en cliquant sur le button s'abonner
    </Typography>

    <div>
      <Button style={{ marginRight: 16 }} color="secondary" variant="contained"
        onClick={handleSubscribe}>
        abonner
      </Button>
      <Button color="primary" variant="contained" onClick={handleOrder}>s'abonner</Button>
    </div>

  </div>
)
