import { activityTypes } from "@common/consts/globals";


const favIconMiddleware = (_store: any) => (next: any) => (action: any) => {
  const result = next(action);

  if (action.type.startsWith('apprising/') || action.type.startsWith('chat/')) {
    const state = _store.getState();
    const apprs = state.apprising.apprisings;
    const homeApprCount = apprs.filter((appr: any) => (
      (appr.type === 'add' || appr.type === 'followup')
      && activityTypes.some((typ) => typ.href === appr.href)
    )).length;
    const networkApprCount = apprs.filter((appr: any) => appr.href.startsWith('/management/network')).length;
    const ticketApprCount = apprs.filter((appr: any) => appr.href.startsWith('/deal')).length;
    const { convs } = state.chat;
    const msgApprCount = convs.filter((_conv: any) => _conv.unreadCount > 0).length;
    const icon = document.getElementById('favicon');
    const curHref = icon?.getAttribute('href');
    if (homeApprCount + networkApprCount + ticketApprCount + msgApprCount > 0) {
      icon?.setAttribute('href', curHref ? curHref.replace('favicon.svg', 'favicon_notification.svg') : '');
    } else {
      icon?.setAttribute('href', curHref ? curHref.replace('favicon_notification.svg', 'favicon.svg') : '');
    }
  }

  return result;
};

export default favIconMiddleware;
