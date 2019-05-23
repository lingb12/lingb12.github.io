import set from '../utils/set'

export default (core, subscription, forms, ui, settings, title, dashboard = false, entities) => ({
  headerProps: {
    title, dashboard,
  },
  notificationProps : core.notification,
  subscriptionProps : set(subscription, 'limitDate', Date.parse(subscription.limitDate)),
  subscribeProps    : set(forms.subscribe, 'open', ui.subscribe),
  aboutProps        : set(subscription, 'open', ui.about),
  infoProps         : set({}, 'open', ui.info),
  settingProps      : set(settings, 'open', ui.setting),
  appMenuProps      : { entities, open: ui.appMenu },
  confirmReinit     : { open: ui.confirmReinit },
})
