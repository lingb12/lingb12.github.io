import arrayContain from '../../utils/array-contain'

export default (ui, toClose, toOpen) => (state = false, { type }) => type !== `TOGGLE ${ui}`
  ? !arrayContain(toClose, type)
    ? !arrayContain(toOpen, type)
      ? state
      : true
    : false
  : !state
