import div from '../commons/div'
import mul from '../commons/mul'

export default ({ code, qty, tCout: cout, ...ob }, tCout, tQty) => code === 0
  ? { ...ob, code, qty, tCout: cout, uCout: div(cout, qty), }
  : { ...ob, code, qty, tCout: mul(div(tCout, tQty), qty), uCout: div(tCout, tQty), }
