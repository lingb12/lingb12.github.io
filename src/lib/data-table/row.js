import React      from 'react'
import TableCell  from '@material-ui/core/TableCell'
import TableRow   from '@material-ui/core/TableRow'

import MoreIcon   from '../buttons/more-icon'

export default ({ art, unitPrice, totalPrice, qty, handleRowClick }) => (
  <TableRow>
    <TableCell>{art}</TableCell>
    <TableCell align="right">{totalPrice}</TableCell>
    <TableCell align="right">{qty}</TableCell>
    <TableCell align="right" padding="none">
      <div className="cell-action">
        {unitPrice}
        <MoreIcon handleClick={handleRowClick} />
      </div>
    </TableCell>
  </TableRow>
)
