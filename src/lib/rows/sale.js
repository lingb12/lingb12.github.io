import React        from 'react'
import TableCell    from '@material-ui/core/TableCell'
import TableRow     from '@material-ui/core/TableRow'
import RemoveButton from '../buttons/remove-icon'

import formatN      from '../../utils/commons/format-number'
import formatD      from '../../utils/commons/format-date'

export default ({ id, art, time, tPrice, qty, uPrice, handleRemove }) => (
  <TableRow>
    <TableCell>{art}</TableCell>
    <TableCell align="right">{formatN(qty)}</TableCell>
    <TableCell align="right">{formatN(uPrice)}</TableCell>
    <TableCell align="right" padding="none">{formatN(tPrice)}</TableCell>
    <TableCell padding="none" />
    <TableCell align="right" padding="none" style={{ paddingLeft: 16 }}>{formatD(time)}</TableCell>
    <TableCell padding="none">
      <div className="cell-action">
        <RemoveButton handleClick={handleRemove(id)} />
        <div style={{ width: 8 }} />
      </div>
    </TableCell>
  </TableRow>
)
