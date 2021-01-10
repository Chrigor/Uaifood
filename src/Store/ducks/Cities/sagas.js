import { call, put } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import api from '../../../Services/api';
// import { navigate } from '../../../services/navigate';

export function* getCities({ payload }) {
  try {

    const { position, city } = payload;
    const { latitude, longitude } = position;

    const { data } = yield call(
      api.get,
      `/cities?q=${city}&lat=${latitude}&lon=${longitude}&count=5`,
    );

    yield put(loadSuccess(data.location_suggestions));
  } catch (err) {
    alert("Houve ume erro");
    yield put(loadFailure());
  }
}