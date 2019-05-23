import React    from 'react'
import Page     from '../../lib/page'
import DataCard from '../../lib/data-card'
import ArtStock from '../../lib/forms-dialog/art-stock'
import Stock    from '../../lib/forms-dialog/stock'
import Filter   from '../../lib/menus/filter'
import Pager    from '../../lib/pagination'

import './index.css'

export default ({ pageProps, operationsProps, fpageProps, foperationsProps, ...props }) => (
  <Page id="operations-page" {...pageProps} {...fpageProps}>

    <div className="pad-8">
      <Pager {...props.pagerProps} {...props.fpagerProps} />
    </div>

    <div className="pad-8">
      <DataCard {...operationsProps} {...foperationsProps} />
    </div>

    <div id="dialogs">
      <Stock {...props.dialogs.stock} {...props.fdialogs.stock} />
      <ArtStock {...props.dialogs.artStock} {...props.fdialogs.artStock} />
      <Filter {...props.dialogs.filter} {...props.fdialogs.filter} />
    </div>

  </Page>
)
