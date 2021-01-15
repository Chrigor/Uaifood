import { call, put } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import api from '../../../Services/api';

export function* getCuisines({ payload }) {
  try {
    const { id } = payload;

    const { data } = yield call(
      api.get,
      `/cuisines?city_id=${id}`,
    );

    yield put(loadSuccess(data.cuisines));

  } catch (err) {
    alert("Houve ume erro");
    yield put(loadFailure());
  }
}