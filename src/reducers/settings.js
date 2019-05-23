import set from '../utils/set'

export const month = m => m < 10 ? `0${m}` : m
export const today = (day = new Date()) => 
  `${day.getFullYear()}-${month(day.getMonth() + 1)}-${day.getDate()}`

export const init = {currentDate: today(), filterDay: false, setOldTime: false}

export default (state = init, { type, payload }) => type !== 'SET SETTING'
  ? state
  : set(state, payload.key, payload.value)
