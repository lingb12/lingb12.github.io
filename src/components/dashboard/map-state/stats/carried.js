import add from '../../../../utils/commons/add'

export default (acc = 0, { code, tCout }) => code === 1
  ? [ add(acc, tCout), 'stock vendu' ]
  : [ acc, 'stock vendu' ]
