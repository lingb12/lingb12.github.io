import articlesDes from './articles-des'

export default (open = false, model = {}, articles) => ({
  open, ...model, articles: Boolean(articles) ? articlesDes(articles) : [],
})
