import React      from 'react'
import TableCell  from '@material-ui/core/TableCell'
import TableRow   from '@material-ui/core/TableRow'
import formatNumb from '../../utils/commons/format-number'

export default ({ art, mPrice, qty, revenue }) => (
  <TableRow>
    <TableCell>{art}</TableCell>
    <TableCell align="right">{formatNumb(qty)}</TableCell>
    <TableCell align="right">{formatNumb(mPrice)}</TableCell>
    <TableCell align="right">{formatNumb(revenue)}</TableCell>
  </TableRow>
)
