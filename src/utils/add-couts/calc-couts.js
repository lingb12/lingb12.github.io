import operationWithCout  from './operation-with-cout'
import updateCout         from './update-cout'
import updateQty          from './update-qty'

export default (arr = []) => arr.reduce(([x, y, z], current) => [
  [...x, operationWithCout(current, y, z) ],
  updateCout(current, y, z),
  updateQty(current, z),
], [[], 0, 0])
