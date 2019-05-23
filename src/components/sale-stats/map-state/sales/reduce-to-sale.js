export default (arr = []) => arr.map((group) => group.reduce((acc, current, i, g) => ({
  art     : current.art,
  qty     : acc.qty + current.qty,
  revenue : acc.revenue + current.tPrice,
  mPrice  : g.reduce((acc, {uPrice}) => acc + uPrice, 0) / g.length,
}), {qty: 0, revenue: 0, mPrice: 0}))
