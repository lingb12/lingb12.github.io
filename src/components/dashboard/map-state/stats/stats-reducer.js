import boughtR   from './bought'
import carriedR  from './carried'
import restR     from './rest'
import resultR   from './result'
import revenueR  from './revenue'

export default (arr = []) => arr.reduce(([[revenue], [result], [carried], [rest], [bought]], current) => [
  revenueR(revenue, current),
  resultR(result,   current),
  carriedR(carried, current),
  restR(rest,       current),
  boughtR(bought,   current),
], [[0, 'chiffre d\' affaire'], [0, 'resultat'], [0, 'stock vendu'], [0, 'stock restant'], [0, 'stock achete']])
