import React        from 'react'
import Typography   from '@material-ui/core/Typography'
import formatNumber from '../utils/commons/format-number'

export default ({ title, value }) => (
  <dl>
    <Typography style={{ fontWeight: 900 }} color="inherit" component="dt">{title}</Typography>
    <Typography style={{ fontWeight: 900 }} color="inherit" component="dd">
      {Number.isNaN(Number.parseInt(formatNumber(value))) ? value : formatNumber(value)}
    </Typography>
  </dl>
)
