import add from '../commons/add'
import sub from '../commons/substract'

export default ({ code, qty }, tQty) => code === 0
  ? add(tQty, qty)
  : sub(tQty, qty)

