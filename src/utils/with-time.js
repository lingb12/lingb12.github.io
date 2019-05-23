import arrayContain from './array-contain'

export const types = [
  'ADD STOCK', 'ADD ARTICLE AND STOCK'
]

export default (model, type, {settings}) => !settings.setOldTime || !arrayContain(types, type)
  ? { ...model, time: Date.now() }
  : { ...model, time: new Date(settings.currentDate).setMinutes(new Date().getMinutes()) }
  