import { call, put, select } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import { loadRequest as loadRestaurant, loadSuccess as loadRestaurantSucess } from '../Restaurants/actions';
import api from '../../../Services/api';

export function* applyFilters({ payload }) {

  // Tive que criar os filtros dessa forma por conta de que a API
  // Não tem suporte a todos filtros por queryParams, se não utilizaria os filtros apenas na requisição

  try {
    const allData = yield select((state) => state["Restaurants"]["allData"]);

    let objectFilter = Object.assign({}, payload);

    if (objectFilter.cuisines.length <= 0) {
      delete objectFilter["cuisines"]
    }

    if (objectFilter.stars.length <= 0) {
      delete objectFilter["stars"]
    }

    if (!objectFilter.price.min) {
      delete objectFilter["price"]["min"]
    }

    if (!objectFilter.price.max) {
      delete objectFilter["price"]["max"]
    }

    if (Object.keys(objectFilter.price) == 0) {
      delete objectFilter["price"]
    }

    let dataFiltered = allData;

    if (objectFilter.stars) {
      const filterStars = ({ restaurant }) => {
        let star = Math.ceil(restaurant.user_rating.aggregate_rating);
        return objectFilter.stars.includes(star);
      }

      dataFiltered = dataFiltered.filter(filterStars);
    }


    if (objectFilter.price) {
      const filterPriceMax = ({ restaurant }) => {
        let priceForTwo = restaurant.average_cost_for_two;
        return priceForTwo <= objectFilter.price.max;
      }

      const filterPriceMin = ({ restaurant }) => {
        let priceForTwo = restaurant.average_cost_for_two;
        return priceForTwo >= objectFilter.price.min;
      }

      dataFiltered = objectFilter.price.max ? dataFiltered.filter(filterPriceMax) : dataFiltered;
      dataFiltered = objectFilter.price.min ? dataFiltered.filter(filterPriceMin) : dataFiltered;
    }

    if(objectFilter.cuisines){

      const filterCuisines = ({ restaurant }) => {
        let cuisines = (restaurant.cuisines);
        return objectFilter.cuisines.includes(cuisines);
      }

      dataFiltered = dataFiltered.filter(filterCuisines);
    }

    yield put(loadSuccess(payload));
    yield put(loadRestaurantSucess({
      allData,
      data: dataFiltered
    }));

  } catch (err) {
    alert("Houve ume erro");
    yield put(loadFailure());
  }
}