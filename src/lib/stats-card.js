import React        from 'react'
import Card         from '@material-ui/core/Card'
import CardHeader   from '@material-ui/core/CardHeader'
import CardContent  from '@material-ui/core/CardContent'
import Divider      from '@material-ui/core/Divider'

import KVInfo       from './kv-info'
import MoreIcon     from './buttons/more-icon'

export default ({ stats = [], handleMoreClick }) => (
  <Card>
    <CardHeader title="Statistiques actuelles" titleTypographyProps={{ variant: 'h6', noWrap: true }}
      action={<MoreIcon id="stats" handleClick={handleMoreClick} />}
    />
    <Divider />
    <CardContent>
      {stats.map(([y, x], i) => <KVInfo key={i} title={x} value={y} />)}
    </CardContent>
  </Card>
)
