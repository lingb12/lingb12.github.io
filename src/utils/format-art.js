import formatNumb from './commons/format-number'
import formatDate from './commons/format-date'

export default ({ uPrice, time, ...ob }) => ({
  ...ob,
  time  : formatDate(time),
  uPrice: formatNumb(uPrice),
})
