import React      from 'react'
import Table      from '@material-ui/core/Table'
import TableBody  from '@material-ui/core/TableBody'
import TableHead  from '@material-ui/core/TableHead'

import Cell       from './cell'

export default ({ data = [], schema = [], Row, cellProps, fcellProps, frowProps = {}}) => (
  <div style={{ overflowX: 'auto' }}>
    <Table>
      <TableHead>
        {schema.map(([x, y, z], j) =>
          <Cell key={j} id={x} label={y} pad={z} {...cellProps} {...fcellProps} />)}
      </TableHead>
      <TableBody>
        {data.map((item, k) => <Row key={k} {...item} {...frowProps} />)}
      </TableBody>
    </Table>
  </div>
)
