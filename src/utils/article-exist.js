export default ({ entities }, art) => Object.keys(entities.articles)
  .some(k => art === entities.articles[k]['des'])
  