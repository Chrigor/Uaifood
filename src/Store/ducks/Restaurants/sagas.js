import { call, put, select } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import { loadRequest } from '../Filters/actions';

import api from '../../../Services/api';

export function* getRestaurants({ payload }) {
  try {
    const dataBefore = yield select((state) => state["Restaurants"]);
    const filters = yield select((state) => state["Filters"]["data"]);

    const { page = 0 } = payload;

    const { data } = yield call(
      api.get,
      `/search?entity_type=city&entity_id=${payload.id}&start=${page * 20}`,
    );

    yield put(loadSuccess({
      allData: [...dataBefore.data, ...data.restaurants],
      data: [...dataBefore.data, ...data.restaurants],
    }));
    
    yield put(loadRequest(filters));

  } catch (err) {
    alert("Houve ume erro");
    yield put(loadFailure());
  }
}