import { all, takeLatest } from 'redux-saga/effects';

import { combineReducers } from 'redux';

import Cities from './Cities';

const appReducer = combineReducers({
  Cities
});

export default appReducer;