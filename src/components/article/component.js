import React        from 'react'
import { Redirect } from 'react-router-dom'
import Page         from '../../lib/page'
import ArticleInfos from '../../lib/article-infos'
import DataCard     from '../../lib/data-card'
import ArticleForm  from '../../lib/forms-dialog/article'
import PriceForm    from '../../lib/forms-dialog/price'

import './index.css'

export default ({ pageProps, statsProps, pricesProps, dialogsProps, ...props }) => Boolean(props.id) ? (
  <Page id="article-page" {...pageProps} {...props.fpageProps}>
    <div className="flex">

      <div id="prices" className="pad-8">
        <DataCard {...pricesProps} {...props.fpricesProps} />
      </div>

      <div className="pad-8 grow">
        <ArticleInfos {...statsProps} />
      </div>

    </div>

    <div id="dialogs">
      <ArticleForm {...dialogsProps.edit} {...props.fdialogsProps.edit} title="Editer l'article" />
      <PriceForm {...dialogsProps.price} {...props.fdialogsProps.price} />
    </div>
  </Page>
) : (
  <Redirect to="/dashboard" />
)
