import * as actionTypes from '../actions/type';

const initialState = {
  stadistics: [],
  stadisticsError: undefined,
  stadisticsLoading: false,
  newStadistics: [],
  newStadisticsError: undefined,
  newStadisticsLoading: false,
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
    case actionTypes.SAVE_STADISTICS_SUCCESS:
      return {
        ...state,
        newStadistics: action.stadistic,
        newStadisticsError: undefined,
        newStadisticsLoading: false,
      };
    case actionTypes.SAVE_STADISTICS_FAIL:
      return {
        ...state,
        newStadistics: [],
        newStadisticsError: action.error,
        newStadisticsLoading: false,
      };
    case actionTypes.SAVE_STADISTICS_LOADING:
      return {
        ...state,
        newStadistics: [],
        newStadisticsError: undefined,
        newStadisticsLoading: true,
      };
    default:
      return { ...state };
  }
};

export default reducer;
