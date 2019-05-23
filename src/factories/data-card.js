export default (title, moreUrl, order, orderBy, row, data, schema, statCard) => ({
  legendProps: {
    title, url: moreUrl, statCard
  },
  tableProps: {
    cellProps: {
      order, orderBy
    },
    schema,
    data,
    Row: row
  }
})
