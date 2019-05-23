export default ({ deleteArt }, { select }) => ({
  open  : deleteArt,
  artId : select.article ? select.article.id : 0,
})
