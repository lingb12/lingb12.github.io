import React      from 'react'
import Card       from '@material-ui/core/Card'

import Legend     from './legend'
import DataTable  from '../data-table'

export default ({ legendProps = {}, tableProps = {}, ...props }) => (
  <Card>
    <Legend {...legendProps} {...props.flegendProps} />
    <DataTable {...tableProps} {...props.ftableProps} />
  </Card>
)

