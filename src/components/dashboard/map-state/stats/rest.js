import add        from '../../../../utils/commons/add'
import substract  from '../../../../utils/commons/substract'

export default (acc = 0, { code, tCout }) => code === 0
  ? [ add(acc, tCout), 'stock restant' ]
  : [ substract(acc, tCout), 'stock restant' ]
