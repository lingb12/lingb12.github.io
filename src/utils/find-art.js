export default ({ entities }, art) => Object.keys(entities.articles)
  .map(k => entities.articles[k])
  .find(({ des }) => des === art)
  