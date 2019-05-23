export default (arr = []) => arr.map(group => group.reduce((acc, current) => ({
  art     : current.art,
  qty     : current.code === 1 ? current.qty + acc.qty : acc.qty,
  revenue : current.code === 1 ? acc.revenue + current.tPrice : acc.revenue,
  bCout   : current.code === 0 ? acc.bCout + current.tCout : acc.bCout,
  cCout   : current.code === 1 ? acc.cCout + current.tCout : acc.cCout,
  result  : current.code === 1 && current.tCout > 0 ? acc.result + current.tPrice - current.tCout : acc.result,
}), { revenue: 0, cCout: 0, bCout: 0, result: 0, qty: 0 }))
