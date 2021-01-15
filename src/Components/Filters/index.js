import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { loadRequest, loadDefault } from '../../Store/ducks/Filters/actions';

function FiltersPage() {

  const dispatch = useDispatch();

  const cuisines = useSelector((state) => state["Cuisines"]["data"]);

  const [filterActive, setFilterActive] = useState(false);
  const [newFilters, setNewFilters] = useState({
    stars: [],
    price: {
      min: undefined,
      max: undefined
    },
    cuisines: []
  });

  const handleChange = (isChecked, key, value) => {
    if (isChecked) {
      switch (key) {
        case "stars":
          let stars = [...newFilters.stars];
          stars.push(value);
          setNewFilters({ ...newFilters, ... { stars } });
          break;
        case "price":
          setNewFilters({ ...newFilters, ...value });
          break;
        case "cuisines":
          let cuisines = [...newFilters.cuisines];
          cuisines.push(value);
          setNewFilters({ ...newFilters, ...{ cuisines } });
          break;
      }

    } else {
      switch (key) {
        case "stars":
          let stars = newFilters.stars.filter((element) => element != value)
          setNewFilters({ ...newFilters, ...{ stars: stars } });
          break;
        case "cuisines":
          let cuisines = newFilters.cuisines.filter((element) => element != value)

          setNewFilters({ ...newFilters, ...{ cuisines: cuisines } });
          break;
      }
    }
  }

  useEffect(() => {
    dispatch(loadRequest(newFilters));
  }, [newFilters]);

  function handleClickClose() {
    setFilterActive(false);
  }

  function handleClickAtive() {
    setFilterActive(true);
  }

  return <Container>
    <div className={filterActive ? "container-filters-active container-filters" : "container-filters"}>
      <button className="close-filter-modal" onClick={handleClickClose}>
        <i class="fas fa-times"></i>
      </button>

      <div className="container-filter">
        <h1>Nota:</h1>
        <ul>
          <li>
            <input type="checkbox" onChange={(event) => {
              handleChange(event.target.checked, "stars", 1)
            }} />
            <label>
              <i class="far fa-star"></i>
            </label>
          </li>
          <li>
            <input type="checkbox" onChange={(event) => {
              handleChange(event.target.checked, "stars", 2)
            }} />
            <label>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </label>
          </li>
          <li>
            <input type="checkbox" onChange={(event) => {
              handleChange(event.target.checked, "stars", 3)
            }} />
            <label>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </label>
          </li>
          <li>
            <input type="checkbox" onChange={(event) => {
              handleChange(event.target.checked, "stars", 4)
            }} />
            <label>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </label>
          </li>
          <li>
            <input type="checkbox" onChange={(event) => {
              handleChange(event.target.checked, "stars", 5)
            }} />
            <label>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </label>
          </li>
        </ul>
      </div>
      <div className="container-filter">
        <h1>Custo para 2 pessoas:</h1>
        <ul>
          <li>
            <input type="radio" name="priceAverage" onChange={(event) => {
              handleChange(event.target.checked, "price", { price: { min: 0, max: 50 } })
            }} />
            <label>
              Até R$50
          </label>
          </li>
          <li>
            <input type="radio" name="priceAverage" onChange={(event) => {
              handleChange(event.target.checked, "price", { price: { min: 50, max: 80 } })
            }} />
            <label>
              De R$50 a R$80
          </label>
          </li>
          <li>
            <input type="radio" name="priceAverage" onChange={(event) => {
              handleChange(event.target.checked, "price", { price: { min: 80, max: 110 } })
            }} />
            <label>
              De R$80 a R$110
          </label>
          </li>

          <li>
            <input type="radio" name="priceAverage" onChange={(event) => {
              handleChange(event.target.checked, "price", { price: { min: 110, max: undefined } })
            }} />
            <label>
              Acima de R$110
          </label>
          </li>
        </ul>
      </div>
      <div className="container-filter">
        <h1>Tipos de Cozinha:</h1>
        <ul>
          {cuisines.map(({ cuisine }) => (
            <li key={cuisine.cuisine_id}>
              <input type="checkbox" onChange={(event) => {
                handleChange(event.target.checked, "cuisines", cuisine.cuisine_name)
              }} />
              <label>
                {cuisine.cuisine_name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="container-mobile">
      <button className="button-filter" onClick={handleClickAtive}>
        <i class="fas fa-filter"></i>
      </button>
    </div>
  </Container>;
}

export default FiltersPage;