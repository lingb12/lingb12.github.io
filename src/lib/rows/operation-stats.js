import React      from 'react'
import TableCell  from '@material-ui/core/TableCell'
import TableRow   from '@material-ui/core/TableRow'
import formatNumb from '../../utils/commons/format-number'

export default ({ art, bCout, cCout, rCout, qty }) => (
  <TableRow>
    <TableCell>{art}</TableCell>
    <TableCell align="right">{formatNumb(qty)}</TableCell>
    <TableCell align="right">{formatNumb(bCout)}</TableCell>
    <TableCell align="right">{formatNumb(cCout)}</TableCell>
    <TableCell align="right">{formatNumb(rCout)}</TableCell>
  </TableRow>
)
