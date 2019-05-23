export default (coll = {}, artId) => Object.keys(coll)
  .reduce((acc, key) => coll[key]['artId'] !== artId ? ({ ...acc, [key]: coll[key] }) : acc, {})
