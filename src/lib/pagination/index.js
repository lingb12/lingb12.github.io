import React      from 'react'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper      from '@material-ui/core/Paper'
import Left       from '@material-ui/icons/ChevronLeft'
import Right      from '@material-ui/icons/ChevronRight'
import Filter     from '@material-ui/icons/FilterList'

export default ({ table, currentPage, pageCount, handleFilterClick, handlePageChange }) => (
  <Paper>
    <div style={{ borderRadius: 'inherit', justifyContent: 'flex-end' }} className="flex-center-items">

      <IconButton color="inherit" disabled={currentPage + 1 === 1} onClick={handlePageChange({page: currentPage - 1, table})}>
        <Left />
      </IconButton>

      <Typography color="inherit">{`${currentPage + 1}/${pageCount || 1}`}</Typography>

      <IconButton color="inherit" disabled={currentPage + 1 === (pageCount || 1)} onClick={handlePageChange({page: currentPage + 1, table})}>
        <Right />
      </IconButton>

      <IconButton id="filter" onClick={handleFilterClick}>
        <Filter />
      </IconButton>

    </div>
  </Paper>
)
