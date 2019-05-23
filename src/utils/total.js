export const total = ([{p, q}, ...prices], qty, tot = 0) => qty < q
  ? qty < 1
    ? tot
    : total(prices, qty, tot)
  : total([{p, q}, ...prices], qty - q, tot + p)

export default total
