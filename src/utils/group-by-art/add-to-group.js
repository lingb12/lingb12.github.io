export default (collection, item, key) => Boolean(collection[item[key]])
  ? [ ...collection[item[key]], item ]
  : [ item ]
  