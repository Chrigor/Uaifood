import { all, takeLatest } from 'redux-saga/effects';
import CitiesTypes from './Cities/types';
import { getCities } from './Cities/sagas';


export default function* rootSaga() {
    return yield all([
        takeLatest(CitiesTypes.LOAD_REQUEST, getCities),
    ]);
}