import add        from '../../../../utils/commons/add'
import substract  from '../../../../utils/commons/substract'

export default (acc = 0, { code, tCout, tPrice }) => code === 1 && tCout > 0
  ? [ add(acc, substract(tPrice, tCout)), 'resultat' ]
  : [ acc, 'resultat' ]
