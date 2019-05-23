import formatNumb from './commons/format-number'
import formatDate from './commons/format-date'

export default ({ cout, uCout, qty, time, ...ob }) => ({
  ...ob,
  time  : formatDate(time),
  qty   : formatNumb(qty),
  cout  : formatNumb(cout),
  uCout : formatNumb(uCout),
})
