import addToGroup from './add-to-group'

export default key => (arr = []) => arr.reduce((acc, current) => ({
  ...acc, [current[key]]: addToGroup(acc, current, key),
}), {})
