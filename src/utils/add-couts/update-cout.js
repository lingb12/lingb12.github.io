import add from '../commons/add'
import div from '../commons/div'
import mul from '../commons/mul'
import sub from '../commons/substract'

export default ({ code, qty, tCout: cout }, tCout, tQty) => code === 0
  ? add(tCout, cout)
  : sub(tCout, mul(div(tCout, tQty), qty))
