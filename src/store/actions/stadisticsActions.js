import * as actionType from './type';
import NProgress from 'nprogress';
import axios from '../../axios';
import axiosFireBase from '../../axiosFireBase';

const getStadisticsSuccess = (stadistics) => ({
  type: actionType.GET_STADISTICS_SUCCESS,
  stadistics,
});

const getStadisticsLoading = () => ({
  type: actionType.GET_STADISTICS_LOADING,
});

const getStadisticsFail = (error) => ({
  type: actionType.GET_STADISTICS_FAIL,
  error: error,
});

export const asyncGetStadistics = () => (dispatch) => {
  dispatch(getStadisticsLoading());
  NProgress.start();
  axiosFireBase
    .get('/stadistics.json')
    .then((response) => {
      const data = response.data;
      dispatch(getStadisticsSuccess(data));
      NProgress.done();
    })
    .catch((error) => {
      dispatch(getStadisticsFail({ hasError: true, message: error.message, trace: error.stack }));
      NProgress.done();
    });
};

const saveStadisticSuccess = (stadistic) => ({
  type: actionType.SAVE_STADISTICS_SUCCESS,
  stadistic,
});

const saveStadisticsLoading = () => ({
  type: actionType.SAVE_STADISTICS_LOADING,
});

const saveStadisticsFail = (error) => ({
  type: actionType.SAVE_STADISTICS_FAIL,
  error: error,
});

export const asyncSaveStadistics = (data) => (dispatch) => {
  dispatch(saveStadisticsLoading());
  NProgress.start();
  axiosFireBase
    .post('/stadistics.json', data)
    .then((response) => {
      const data = response.data;
      dispatch(saveStadisticSuccess(data));
      NProgress.done();
    })
    .catch((error) => {
      dispatch(saveStadisticsFail({ hasError: true, message: error.message, trace: error.stack }));
      NProgress.done();
    });
};
