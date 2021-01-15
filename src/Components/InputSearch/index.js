import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from "lodash";
import { useHistory } from "react-router-dom";

import { Container, ContainerSuggestion } from './styles';


import { loadRequest, loadDefault } from '../../Store/ducks/Cities/actions';

function InputSearch({fontSize = 24}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handler = useCallback(debounce(handleChangeCity, 500), []);

    const { data: dataCities } = useSelector(state => state["Cities"]);


    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0
    });

    const [search, setSearch] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function (position) {
            setPosition(position.coords);
        });   
    }, []);


    function handleChangeCity({ target }) {
        const search = (target.value);

        dispatch(loadRequest({
            position,
            city: search
        }));

        setSelectedCity('');
    }

    function handleClickSearch() {
        history.push(`/list-restaurant/${selectedCity.city}/${selectedCity.id}`)
    }

    function handleClickCity(param, id) {
        setSearch(param);
        setSelectedCity({
            city: param,
            id
        });

        dispatch(loadDefault());
    }

    return <Container fontSize={fontSize}>
        <div className="containerInput">
            <i className="fas fa-map-marker-alt"></i>
            <input placeholder="Digite sua cidade" onChange={(event) => {
                setSearch(event.target.value);
                handler(event);
            }}
                value={search}
            />

            <ContainerSuggestion display={dataCities.length > 0 ? 'block' : 'none'} fontSize={fontSize}>

                {dataCities.map(({ id, name }) => {
                    return (
                        <button key={name} onClick={() => handleClickCity(name, id)}>
                            <h1 className="text">{name}</h1>
                            <span className="text">Estado de {name}</span>
                        </button>
                    )
                })}

            </ContainerSuggestion>
        </div>
        <button disabled={Object.keys(selectedCity).length <= 0 ? true : false} onClick={handleClickSearch}>Buscar</button>
    </Container>
}

export default InputSearch;