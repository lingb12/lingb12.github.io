export default (collection = {}, key, value ) => ({
  ...collection, [key]: value,
})
