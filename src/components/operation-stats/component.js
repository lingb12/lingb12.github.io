import React    from 'react'
import DataCard from '../../lib/data-card'
import Page     from '../../lib/page'
import Pager    from '../../lib/pagination'
import Filter   from '../../lib/menus/filter'

import './index.css'

export default ({ pageProps, fpageProps, operationStatsProps, foperationStatsProps, ...props }) => (
  <Page {...pageProps} {...fpageProps}>
  
    <div className="pad-8">
      <Pager {...props.pagerProps} {...props.fpagerProps} />
    </div>

    <div className="pad-8">
      <DataCard {...operationStatsProps} {...foperationStatsProps} />
    </div>

    <Filter {...props.filter} {...props.ffilter} />
  </Page>
)
