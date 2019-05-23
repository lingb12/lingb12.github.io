import arrayContain from './array-contain'
import keys         from './commons/keys'
import merge        from './merge-object'

export const config = {
  a: ['ADD SALE', 'ADD STOCK'], b: ['ADD ARTICLE AND SALE', 'ADD ARTICLE AND STOCK'], c: ['ADD ARTICLE']
}

export const id = (ids = []) => ids.length ? Math.max(...ids) + 1 : 1

export default ({type, payload}, {entities}) => !arrayContain(config.a, type)
  ? !arrayContain(config.b, type)
    ? !arrayContain(config.c, type)
      ? { type, payload }
      : { type, payload: merge(payload, { id: id(keys(entities.articles)) }) }
    : { type, payload: { ...payload, id: id(keys(entities.operations)), tPrice: payload.code === 1 ? payload.uPrice * payload.qty : undefined, artId: id(keys(entities.articles)) }}
  : { type, payload: {...payload, id: id(keys(entities.operations))}}
