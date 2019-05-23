import Article        from './article'
import Articles       from './articles'
import Dashboard      from './dashboard'
import OperationStats from './operation-stats'
import Operations     from './operations'
import ResultStats    from './result-stats'
import SaleStats      from './sale-stats'
import Sales          from './sales'

export default [
  ['/dashboard', Dashboard],
  ['/articles/:id', Article],
  ['/articles', Articles],
  ['/operations-stats', OperationStats],
  ['/operations', Operations],
  ['/resultats-stats', ResultStats],
  ['/ventes-stats', SaleStats],
  ['/ventes', Sales],
]
