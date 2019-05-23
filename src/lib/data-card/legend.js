import React      from 'react'
import { Link }   from 'react-router-dom'
import CardHeader from '@material-ui/core/CardHeader'
import Add        from '../buttons/add-icon'
import More       from '../buttons/more-icon'

export default ({ statCard = false, title, url, handleMoreClick }) => (
  <div>
    <CardHeader title={title} titleTypographyProps={{ variant: 'h6', noWrap: true }}
      action={
        <React.Fragment>
          {Boolean(url) && <More to={url} component={Link} />}
          {!Boolean(statCard) && <Add handleClick={handleMoreClick} />}
        </React.Fragment>
      }
    />
  </div>
)
