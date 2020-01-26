import * as actionType from './type';

export const showMobileMenu = (show) => ({
  type: actionType.SHOW_MOBILE_MENU,
  show,
});

export const showModal = (show) => ({
  type: actionType.SHOW_MODAL,
  show,
});
