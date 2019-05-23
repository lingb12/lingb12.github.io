import React        from 'react'
import TableCell    from '@material-ui/core/TableCell'
import TableRow     from '@material-ui/core/TableRow'
import RemoveButton from '../buttons/remove-icon'

export default ({ price, qty, art, handleRemove }) => (
  <TableRow>
    <TableCell>{qty}</TableCell>
    <TableCell align="right" padding="none">
      {price}
    </TableCell>
    <TableCell padding="none">
      <div className="cell-action">
        {qty > 1 && <RemoveButton handleClick={handleRemove({art, qty: qty * 1})} />}
        <div style={{ width: 8 }} />
      </div>
    </TableCell>
  </TableRow>
)
