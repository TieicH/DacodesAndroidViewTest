import * as actionType from './type';
import NProgress from 'nprogress';
import axios from '../../axios';
import { orderGames } from '../../utils';

const getGamesSuccess = (games) => ({
  type: actionType.GET_GAMES_SUCCESS,
  games,
});

const getGamesLoading = () => ({
  type: actionType.GET_GAMES_LOADING,
});

const getGamesFail = (error) => ({
  type: actionType.GET_GAMES_FAIL,
  error: error,
});

export const asyncGetGames = () => (dispatch) => {
  dispatch(getGamesLoading());
  NProgress.start();
  axios
    .get('/games')
    .then((response) => {
      const data = response.data.data.games;
      const games = {
        copaMX: data.filter((game) => game.league === 'Copa MX'),
        ascensoMX: data.filter((game) => game.league === 'Ascenso MX'),
      };
      games.ascensoMX = orderGames(games.ascensoMX);
      games.copaMX = orderGames(games.copaMX);
      dispatch(getGamesSuccess(games));
      NProgress.done();
    })
    .catch((error) => {
      dispatch(getGamesFail({ hasError: true, message: error.message, trace: error.stack }));
      NProgress.done();
    });
};
