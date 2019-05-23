import formatNumb from './commons/format-number'
import formatDate from './commons/format-date'

export default ({ total, qty, time, ...ob }) => ({
  ...ob,
  qty       : formatNumb(qty),
  time      : formatDate(time),
  unitPrice : formatNumb(total / qty),
  total     : formatNumb(total),
})
