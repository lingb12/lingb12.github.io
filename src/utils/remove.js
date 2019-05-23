export default (coll = {}, id) => Object.keys(coll)
  .filter(k => 1 * k !== id)
  .reduce((acc, key) => ({ ...acc, [key]: coll[key] }), {})
  