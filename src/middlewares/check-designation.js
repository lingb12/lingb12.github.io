import arrayContain from '../utils/array-contain'
import toArray      from '../utils/commons/to-array'

export const findArt = ({entities}, {des: art, id: artId}) => toArray(entities.articles)
  .find(({id, des}) => id !== artId && des === art)

export const actionTypes      = ['ADD ARTICLE', 'ADD UPDATE ARTICLE']
export const designationExist = (state, model) => Boolean(findArt(state, model))

export default store => next => action => arrayContain(actionTypes, action.type) && designationExist(store.getState(), action.payload)
  ? next({ type: 'DESIGNATION EXIST ERROR' })
  : next(action)
