import aContain from '../../utils/array-contain'

export default (state = {}, { type, payload }) => type !== 'SELECT ARTICLE'
  ? !aContain(['ADD SALE', 'ADD UPDATE ARTICLE', 'REMOVE ARTICLE', 'TOGGLE ARTICLE MENU'], type)
    ? state
    : {}
  : payload
  