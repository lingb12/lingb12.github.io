import React        from 'react'
import Card         from '@material-ui/core/Card'

import KVInfos from './kv-infos'

export default ({ infos = [] }) => (
  <Card>
    {infos.map((item, k) => <KVInfos key={k} {...item} />)}
  </Card>
)
