import React    from 'react'
import DataCard from '../../lib/data-card'
import Page     from '../../lib/page'
import ArticleF from '../../lib/forms-dialog/article'
import SaleForm from '../../lib/forms-dialog/sale'
import ArticleM from '../../lib/menus/article-menu'
import Pager    from '../../lib/pagination'
import Filter   from '../../lib/menus/filter'
import ConfirmD from '../../lib/delete-confirmation'

import './index.css'

export default ({ pageProps, fpageProps, articlesProps, farticlesProps, ...props }) => (
  <Page id="articles-page" {...pageProps} {...fpageProps}>

    <div className="pad-8">
      <Pager {...props.pagerProps} {...props.fpagerProps} />
    </div>

    <div className="pad-8">
      <DataCard {...articlesProps} {...farticlesProps} />
    </div>

    <div id="dialogs">
      <ArticleF {...props.dialogs.article} {...props.fdialogs.article} title="Ajouter un article" />
      <ArticleF {...props.dialogs.updateArticle} {...props.fdialogs.updateArticle} title="Editer l'article" />
      <ArticleM {...props.dialogs.articleMenu} {...props.fdialogs.articleMenu} />
      <SaleForm {...props.dialogs.sale} {...props.fdialogs.sale} />
      <Filter {...props.dialogs.filter} {...props.fdialogs.filter} />
      <ConfirmD {...props.dialogs.confirmDelete} {...props.fdialogs.fconfirmDelete} />
    </div>
    
  </Page>
)
