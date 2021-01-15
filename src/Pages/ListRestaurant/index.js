import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import Header from '../../Components/Header';
import Filters from '../../Components/Filters';
import ListItems from '../../Components/ListItems';
import Loading from '../../Components/Loading';


function ListRestaurant() {

  const restaurants = useSelector((state) => state["Restaurants"]);
  const {loading} = restaurants;
  
  return <Container>
    <Header />

    {loading && <Loading />}

    <div className="container-content">
      <Filters />
      <ListItems />
    </div>
  </Container>;
}

export default ListRestaurant;