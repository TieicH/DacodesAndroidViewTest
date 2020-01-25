import * as actionTypes from '../actions/type';

const initialState = {
  showMobileMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MOBILE_MENU:
      return {
        ...state,
        showMobileMenu: action.show,
      };
    default:
      return { ...state };
  }
};

export default reducer;
