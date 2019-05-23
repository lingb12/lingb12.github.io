import React          from 'react'
import TableCell      from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'

export default ({ order, orderBy, id, label, pad = 'default', handleSort }) => (
  <TableCell
    padding={pad}
    align={['qty', 'salesCount', 'uPrice', 'time', 'tPrice', 'tCout', 'uCout', 'price', 'bCout', 'cCout', 'rCout', 'revenue', 'result', 'mPrice']
      .some(item => item === id) ? 'right' : 'left'}
    sortDirection={orderBy === id ? order : false}
  >
    <TableSortLabel direction={order} active={orderBy === id} onClick={handleSort(id)}>
      {label}
    </TableSortLabel>
  </TableCell>
)
