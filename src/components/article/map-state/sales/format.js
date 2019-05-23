import formatNumber from '../../../../utils/commons/format-number'

export default (salesStats = []) => salesStats.map(([lab, stat]) => [lab, formatNumber(stat)])
