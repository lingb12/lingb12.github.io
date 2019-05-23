import total    from '../../utils/total'
import toArray  from '../../utils/commons/to-array'

export const getTotal = ({prices, uPrice}, qty) => Boolean(prices)
  ? total([...toArray(prices).reverse(), {q: 1, p: uPrice}], qty)
  : uPrice * qty

export default ({ id, des, ...article }, { art, qty, code, ...ob }) => ({
  ...ob, qty, code,
  art   : des,
  artId : id,
  tPrice: code === 1 ? getTotal(article, qty) : undefined,
})
