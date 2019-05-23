export default (arr = []) => arr.map(group => group.reduce((acc, current) => ({
  art  : current.art,
  qty  : current.code === 0 ? acc.qty + current.qty : acc.qty - current.qty,
  bCout: current.code === 0 ? acc.bCout + current.tCout : acc.bCout,
  cCout: current.code === 1 ? acc.cCout + current.tCout : acc.cCout,
  rCout: current.code === 0 ? acc.rCout + current.tCout : acc.rCout - current.tCout,
}), { bCout: 0, cCout: 0, rCout: 0, qty: 0 }))
