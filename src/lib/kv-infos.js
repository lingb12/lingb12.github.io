import React      from 'react'
import Divider    from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import KVInfo     from './kv-info'

export default ({ title, infos = []}) => (
  <div className="pad-8">
    <div style={{ padding: '8px 8px 0 8px' }}>
      <Typography variant="h6">{title}</Typography>
    </div>
    <Divider style={{ margin: '0 8px'}} />
    <div className="pad-8">
      {infos.map(([x, y], key) => <KVInfo key={key} title={x} value={y} />)}
    </div>
  </div>
)
