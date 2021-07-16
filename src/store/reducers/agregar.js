import * as actionTypes from '../actions/type';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAS1:
      return {
        ...state,
        counter: state.counter + action.amout,
      };
    case actionTypes.MENOS1:
      return {
        ...state,
        counter: state.counter - action.amout,
      };
    default:
      return { ...state };
  }
};

export default reducer;
