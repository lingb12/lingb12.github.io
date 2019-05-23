import { combineReducers } from 'redux'
import uiR    from './ui-reducer'

export default combineReducers({
  updateArticle : uiR('UPDATE ARTICLE', ['ADD UPDATE ARTICLE'], ['EDIT ARTICLE']),
  article       : uiR('ARTICLE', ['ADD ARTICLE', 'ADD ARTICLE AND STOCK', 'ADD ARTICLE AND SALE']),
  stock         : uiR('STOCK', ['ADD STOCK', 'ADD ARTICLE AND STOCK']),
  sale          : uiR('SALE', ['ADD SALE', 'ADD ARTICLE AND SALE'], ['BUY ARTICLE']),
  artSale       : uiR('ART SALE', ['ADD ARTICLE AND SALE']),
  artStock      : uiR('ART STOCK', ['ADD ARTICLE AND STOCK']),
  appMenu       : uiR('APP MENU', ['ADD ARTICLE', 'REINIT', 'OPEN FILE', 'BACKUP', 'SET SUBSCRIPTION', 'ADD ARTICLE AND STOCK', 'ADD ARTICLE AND SALE', 'ADD STOCK']),
  articlePage   : uiR('ARTICLE PAGE', ['ADD UPDATE ARTICLE', 'ADD PRICE']),
  price         : uiR('PRICE', ['ADD PRICE']),
  articlesPage  : uiR('ARTICLES PAGE'),
  salePage      : uiR('SALE PAGE', ['ADD SALE', 'ADD ARTICLE AND SALE']),
  operationPage : uiR('OPERATION PAGE', ['ADD STOCK', 'ADD ARTICLE AND STOCK']),
  saleStats     : uiR('SALES STATS'),
  operationStats: uiR('OPERATIONS STATS'),
  resultStats   : uiR('RESULTS STATS'),
  filter        : uiR('FILTER MENU'),
  statsMenu     : uiR('STATS MENU'),
  setting       : uiR('SETTING'),
  about         : uiR('ABOUT', ['SET SUBSCRIPTION']),
  subscribe     : uiR('SUBSCRIBE', ['SET SUBSCRIPTION']),
  info          : uiR('INFO'),
  deleteArt     : uiR('DELETE ART', ['REMOVE ARTICLE']),
  confirmReinit : uiR('CONFIRM REINIT', ['REINIT']),
})
