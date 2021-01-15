import { all, takeLatest } from 'redux-saga/effects';

import { combineReducers } from 'redux';

import Cities from './Cities';
import Restaurants from './Restaurants';
import Cuisines from './Cuisines';
import Filters from './Filters';

const appReducer = combineReducers({
  Cities,
  Restaurants,
  Cuisines,
  Filters
});

export default appReducer;