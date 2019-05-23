export default (count = 1, perPage = 1) => Number.isInteger(count / perPage)
  ? count / perPage
  : Number.parseInt(count / perPage) + 1
  