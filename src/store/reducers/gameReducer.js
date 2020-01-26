import * as actionTypes from '../actions/type';

const initialState = {
  games: {},
  gamesError: undefined,
  gamesLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GAMES_SUCCESS:
      return {
        ...state,
        games: action.games,
        gamesError: undefined,
        gamesLoading: false,
      };
    case actionTypes.GET_GAMES_FAIL:
      return {
        ...state,
        games: {},
        gamesError: action.error,
        gamesLoading: false,
      };
    case actionTypes.GET_GAMES_LOADING:
      return {
        ...state,
        games: {},
        gamesError: undefined,
        gamesLoading: true,
      };
    default:
      return { ...state };
  }
};

export default reducer;
