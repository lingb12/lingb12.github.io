import add        from '../../../../utils/commons/add'

export default (acc = 0, { code, tCout }) => code !== 0
  ? [ acc, 'stock achete']
  : [ add(acc, tCout), 'stock achete' ]
