import React    from 'react'
import DataCard from '../../lib/data-card'
import Page     from '../../lib/page'
import Filter   from '../../lib/menus/filter'
import Pager    from '../../lib/pagination'

import './index.css'

export default ({ pageProps, fpageProps, saleStatsProps, fsaleStatsProps, ...props }) => (
  <Page {...pageProps} {...fpageProps}>

    <div className="pad-8">
      <Pager {...props.pagerProps} {...props.fpagerProps} />
    </div>
  
    <div className="pad-8">
      <DataCard {...saleStatsProps} {...fsaleStatsProps} />
    </div>

    <Filter {...props.filter} {...props.ffilter} />
  </Page>
)
