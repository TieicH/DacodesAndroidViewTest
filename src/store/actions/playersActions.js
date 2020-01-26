import * as actionType from './type';
import NProgress from 'nprogress';
import axios from '../../axios';
import { mergePlayer } from '../../utils';

const getPlayersSuccess = (players) => ({
  type: actionType.GET_PLAYERS_SUCCESS,
  players,
});

const getPlayersLoading = () => ({
  type: actionType.GET_PLAYERS_LOADING,
});

const getPlayersFail = (error) => ({
  type: actionType.GET_PLAYERS_FAIL,
  error: error,
});

export const asyncGetPlayers = () => (dispatch) => {
  dispatch(getPlayersLoading());
  NProgress.start();
  axios
    .get('/players')
    .then((response) => {
      const data = response.data.data.team;
      const players = mergePlayer(data);
      dispatch(getPlayersSuccess(players));
      NProgress.done();
    })
    .catch((error) => {
      dispatch(getPlayersFail({ hasError: true, message: error.message, trace: error.stack }));
      NProgress.done();
    });
};

export const setSelectedPlayer = (player) => ({
  type: actionType.SET_SELECTED_PLAYER,
  player,
});
