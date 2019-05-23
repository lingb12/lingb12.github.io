import formatNumber   from '../../../utils/commons/format-number'
import formatNumber0  from '../../../utils/commons/format-number-0'
import toArray        from '../../../utils/commons/to-array'

export default ({ id, uPrice, prices }) => [
  {qty: 1, price: formatNumber(uPrice), art: id},
  ...toArray(prices || {})
    .map(({p, q}) => ({ art: id, qty: formatNumber0(q), price: formatNumber(p) }))
]
