import React        from 'react'

import ArtSale      from '../../lib/forms-dialog/art-sale'
import ArtStock     from '../../lib/forms-dialog/art-stock'
import Article      from '../../lib/forms-dialog/article'
import Sale         from '../../lib/forms-dialog/sale'
import Stock        from '../../lib/forms-dialog/stock'
import ArticleMenu  from '../../lib/menus/article-menu'
import StatsMenu    from '../../lib/menus/stats-menu'
import DeleteConfir from '../../lib/delete-confirmation'

export default props => (
  <div>
    <ArtSale {...props.artSale} {...props.fartSale} />
    <ArtStock {...props.artStock} {...props.fartStock} />
    <Article {...props.article} {...props.farticle} title="Ajouter un article" />
    <Article {...props.updateArticle} {...props.fupdateArticle} title="Editer l'article" />
    <Sale {...props.sale} {...props.fsale} />
    <Stock {...props.stock} {...props.fstock} />
    <ArticleMenu {...props.articleMenu} {...props.farticleMenu} />
    <StatsMenu {...props.statsMenu} {...props.fstatsMenu} />
    <DeleteConfir {...props.deleteArt} {...props.fdeleteArt} />
  </div>
)
