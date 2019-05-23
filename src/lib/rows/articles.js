import React      from 'react'
import TableCell  from '@material-ui/core/TableCell'
import TableRow   from '@material-ui/core/TableRow'
import MoreVert   from '../buttons/more-vert-icon'

import formatN from '../../utils/commons/format-number'
import formatD from '../../utils/commons/format-date'

export default ({ id, des, uPrice, time, salesCount, handleSelect }) => (
  <TableRow>
    <TableCell>{des}</TableCell>
    <TableCell align="right" padding="none">{formatN(uPrice)}</TableCell>
    <TableCell align="right">{formatN(salesCount)}</TableCell>
    <TableCell align="right" padding="none">{formatD(time)}</TableCell>
    <TableCell padding="none">
      <div className="cell-action">
        <MoreVert handleClick={handleSelect({id, des, uPrice})} />
        <div style={{ width: 8 }} />
      </div>
    </TableCell>
  </TableRow>
)
