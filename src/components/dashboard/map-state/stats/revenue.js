import add from '../../../../utils/commons/add'

export default (acc = 0, { code, tPrice }) => code === 1
  ? [ add(acc, tPrice), 'chiffre d\' affaire' ]
  : [ acc, 'chiffre d\' affaire' ]
