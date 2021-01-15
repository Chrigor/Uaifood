import { all, takeLatest } from 'redux-saga/effects';

import CitiesTypes from './Cities/types';
import RestaurantsTypes from './Restaurants/types';
import CuisinesTypes from './Cuisines/types';
import FiltersTypes from './Filters/types';


import { getCities } from './Cities/sagas';
import { getRestaurants } from './Restaurants/sagas';
import { getCuisines } from './Cuisines/sagas';
import { applyFilters } from './Filters/sagas';


export default function* rootSaga() {
    return yield all([
        takeLatest(CitiesTypes.LOAD_REQUEST, getCities),
        takeLatest(RestaurantsTypes.LOAD_REQUEST, getRestaurants),
        takeLatest(CuisinesTypes.LOAD_REQUEST, getCuisines),
        takeLatest(FiltersTypes.LOAD_REQUEST, applyFilters),
    ]);
}