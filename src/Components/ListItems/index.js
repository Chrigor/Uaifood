import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';


import { loadRequest, loadDefault } from '../../Store/ducks/Restaurants/actions';
import { loadRequest as loadRequestCuisines } from '../../Store/ducks/Cuisines/actions';

import Card from '../../Components/CardRestaurant';


function ListItems() {

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  let { id, cidade } = useParams();
  const restaurants = useSelector((state) => state["Restaurants"]);
  const { data, loading } = restaurants;


  const handleClickMore = () => {
    setPage(page + 1);
    getRestaurants(page);
  };

  const getRestaurants = (page = 0) => {
    dispatch(loadRequest({
      id,
      page
    }));
  }

  useEffect(() => {
    dispatch(loadDefault());

    setPage(0);
    getRestaurants();

    dispatch(loadRequestCuisines({
      id
    }));

  }, [id]);

  return <Container>
    <h1>Resultados em {cidade}</h1>
    <span>Exibindo {data.length} resultados</span>
    <div className="grid">
      {data.length > 0 ? data.map((restaurant, indice) => <Card key={indice} restaurant={restaurant} />) : null}
    </div>
    {data.length == 0 && <h1>Busque por mais dados para que apresentem restaurantes que satisfação os filtros.</h1>}
    {!loading && <button onClick={handleClickMore}>More</button>}
  </Container>;
}

export default ListItems;