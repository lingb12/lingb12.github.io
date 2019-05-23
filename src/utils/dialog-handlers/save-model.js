export default (type, key, { forms }) => ({
  type: `ADD ${type}`, payload: forms[key],
})
