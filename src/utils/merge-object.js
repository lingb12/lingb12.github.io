export default (...objs) => objs.reduce((acc, current) => ({
  ...acc, ...current
}), {})
