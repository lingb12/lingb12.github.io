import React    from 'react'
import Page     from '../../lib/page'
import DataCard from '../../lib/data-card'
import Sale     from '../../lib/forms-dialog/sale'
import ArtSale  from '../../lib/forms-dialog/art-sale'
import Pager    from '../../lib/pagination'
import Filter   from '../../lib/menus/filter'

import './index.css'

export default ({ pageProps, fpageProps, salesProps, fsalesProps, ...props }) => (
  <Page id="sales-page" {...pageProps} {...fpageProps}>

    <div className="pad-8">
      <Pager {...props.pagerProps} {...props.fpagerProps} />
    </div>

    <div className="pad-8">
      <DataCard {...salesProps} {...fsalesProps} />
    </div>

    <div id="dialogs">
      <Sale {...props.dialogs.sale} {...props.fdialogs.sale} />
      <ArtSale {...props.dialogs.artSale} {...props.fdialogs.artSale} />
      <Filter {...props.dialogs.filter} {...props.fdialogs.filter} />
    </div>

  </Page>
)
