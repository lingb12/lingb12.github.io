import React from 'react'

import Page     from '../../lib/page'
import DataCard from '../../lib/data-card'
import Stats    from '../../lib/stats-card'
import Dialogs  from './dialogs'

import './index.css'

export default ({ dialogs = {}, pageProps, fpageProps, ...props }) => (
  <Page id="dashboard" {...pageProps} {...fpageProps}>
    <div className="pad-8 snap-item">
      <Stats {...props.statsProps} {...props.fstatsProps} />
    </div>

    <div className="flex snap-item">
      <div id="articles" className="pad-8">
        <DataCard {...props.articlesDataCard} {...props.farticlesDataCard} />
      </div>

      <div id="ventes" className="pad-8 snap-item">
        <DataCard {...props.salesDataCard} {...props.fsalesDataCard} />
      </div>
    </div>

    <div id="operations" className="pad-8 snap-item">
      <DataCard {...props.operationsDataCard} {...props.foperationsDataCard} />
    </div>

    <Dialogs {...dialogs} {...props.fdialogs} />
  </Page>
)
