import React          from 'react'
import TableCell      from '@material-ui/core/TableCell'
import TableRow       from '@material-ui/core/TableRow'
import RemoveButton   from '../buttons/remove-icon'

import formatN        from '../../utils/commons/format-number'
import formatD        from '../../utils/commons/format-date'

export const style = tCout => ({ style: { color: tCout <= 0 ? 'darkred' : 'rgba(0, 0, 0, 0.87)' } })

export default ({ id, code, art, uCout, time, tCout, qty, handleRemove }) => (
  <TableRow>
    <TableCell {...style(tCout)}>{art}</TableCell>
    <TableCell {...style(tCout)}>{{0: 'Achat', 1: 'Vente'}[code]}</TableCell>
    <TableCell {...style(tCout)} align="right">{formatN(qty)}</TableCell>
    <TableCell {...style(tCout)} align="right">{formatN(uCout)}</TableCell>
    <TableCell {...style(tCout)} align="right" padding="none">{formatN(tCout)}</TableCell>
    <TableCell {...style(tCout)} align="right" padding="none">
      <div style={{ paddingLeft: 16 }}>{formatD(time)}</div>
    </TableCell>
    <TableCell padding="none">
      <div className="cell-action">
        <RemoveButton handleClick={handleRemove(id)} />
        <div style={{ width: 8 }} />
      </div>
    </TableCell>
  </TableRow>
)
