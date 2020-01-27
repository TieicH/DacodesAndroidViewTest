import * as actionTypes from '../actions/type';

const initialState = {
  stadistics: [],
  stadisticsError: undefined,
  stadisticsLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STADISTICS_SUCCESS:
      return {
        ...state,
        stadistics: action.stadistics,
        stadisticsError: undefined,
        stadisticsLoading: false,
      };
    case actionTypes.GET_STADISTICS_FAIL:
      return {
        ...state,
        stadistics: [],
        stadisticsError: action.error,
        stadisticsLoading: false,
      };
    case actionTypes.GET_STADISTICS_LOADING:
      return {
        ...state,
        stadistics: [],
        stadisticsError: undefined,
        stadisticsLoading: true,
      };
    default:
      return { ...state };
  }
};

export default reducer;
