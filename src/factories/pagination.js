import pageCount from '../utils/page-count'

export default (pagination, table, itemsCount) => ({
  table,
  currentPage : pagination[table]['currentPage'],
  pageCount   : pageCount(itemsCount, pagination[table]['perPage']),
})
