import React from 'react'
import Alert from './alert'
import Block from './block'
import milli from '../../utils/millisecond'

export const now              = () => Date.now()
export const firstMessage     = 'Votre abonnement expire bientot'
export const secondMeMessage  = 'Abonnez-vous, car si non l\'application va s\'auto-bloquer'

export default props => Boolean(props.limitDate) || !((now() - props.firstVisit) < milli(7))
  ? !(Boolean(props.limitDate) && (now() - props.limitDate) > 0)
    ? !(!Boolean(props.limitDate) && (now() - props.firstVisit) > milli(7))
      ? props.limitDate - now() > milli(4)
        ? null
        : <Alert message={firstMessage} handleOrder={props.handleOrder} />
      : <Block handleOrder={props.handleOrder} handleSubscribe={props.handleSuscribe} />
    : <Block handleOrder={props.handleOrder} handleSubscribe={props.handleSuscribe} expired />
  : <Alert message={secondMeMessage} handleOrder={props.handleOrder} />
