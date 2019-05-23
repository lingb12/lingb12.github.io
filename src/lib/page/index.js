import React        from 'react'
import AppHeader    from '../header'
import Notification from './notification'
import Subscription from '../subscription'
import Subscribe    from '../forms-dialog/suscribe'
import About        from '../about'
import Info         from '../subscription-info'
import Setting      from '../setting'
import AppMenu      from '../menu'
import ConfirmReint from '../confirm-reinit'

export default ({ id, children, notificationProps, fnotificationProps, headerProps, fheaderProps, ...props }) => (
  <React.Fragment>
    <AppHeader {...headerProps} {...fheaderProps} />

    <main id={id} className={props.className}>
      {children}
    </main>

    <Info {...props.infoProps} {...props.finfoProps} />
    <About {...props.aboutProps} {...props.faboutProps} />
    <Notification {...notificationProps} {...fnotificationProps} />
    <Subscription {...props.subscriptionProps } {...props.fsubscriptionProps} />
    <Subscribe {...props.subscribeProps} {...props.fsubscribeProps} />
    <Setting {...props.settingProps} {...props.fsettingProps} />
    <AppMenu {...props.appMenuProps} {...props.fappMenuProps} />
    <ConfirmReint {...props.confirmReinit} {...props.fconfirmReinit} />
  </React.Fragment>
)
