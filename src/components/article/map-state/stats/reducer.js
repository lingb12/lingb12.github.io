import boughtR   from './bought'
import carriedR  from './carried'
import restR     from './rest'

export default (arr = []) => arr.reduce(([[,bought], [,carried], [,rest]], current) => [
  boughtR(bought,   current),
  carriedR(carried, current),
  restR(rest,       current),
], [['stock achete', 0], ['stock vendu', 0], ['stock restant', 0]])
