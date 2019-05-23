export default (coll = {}, {id, ...elem}) => ({
  ...coll, [id]: {id, ...elem}
})
