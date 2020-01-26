import * as actionTypes from '../actions/type';

const initialState = {
  players: [],
  playersError: undefined,
  playersLoading: false,
  selectedPlayer: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.players,
        playersError: undefined,
        playersLoading: false,
      };
    case actionTypes.GET_PLAYERS_FAIL:
      return {
        ...state,
        players: [],
        playersError: action.error,
        playersLoading: false,
      };
    case actionTypes.GET_PLAYERS_LOADING:
      return {
        ...state,
        players: [],
        playersError: undefined,
        playersLoading: true,
      };
    case actionTypes.SET_SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayer: action.player,
      };
    default:
      return { ...state };
  }
};

export default reducer;
