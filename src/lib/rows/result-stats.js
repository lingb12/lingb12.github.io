import React      from 'react'
import TableCell  from '@material-ui/core/TableCell'
import TableRow   from '@material-ui/core/TableRow'
import formatNumb from '../../utils/commons/format-number'

export default ({ art, qty, revenue, cCout, result }) => (
  <TableRow>
    <TableCell>{art}</TableCell>
    <TableCell align="right">{formatNumb(qty)}</TableCell>
    <TableCell align="right">{formatNumb(revenue)}</TableCell>
    <TableCell align="right">{formatNumb(cCout)}</TableCell>
    <TableCell align="right">{formatNumb(result)}</TableCell>
  </TableRow>
)
