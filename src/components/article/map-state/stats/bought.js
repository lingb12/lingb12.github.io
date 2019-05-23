import add from '../../../../utils/commons/add'

export default (acc = 0, { code, tCout }) => code !== 0
  ? [ 'stock achete', acc]
  : [ 'stock achete', add(acc, tCout) ]
