import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from "lodash";

import LogoUaiFood from '../../Assets/Images/logo-white.jpg';
import { Container, ContainerMiddlew, ContainerSuggestion } from './styles';


import { loadRequest, loadDefault } from '../../Store/ducks/Cities/actions';

function InputSearch() {
    const dispatch = useDispatch();
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
        console.log("Buscar");
        console.log(selectedCity);
    }

    function handleClickCity(param) {
        setSearch(param);
        setSelectedCity(param);

        dispatch(loadDefault());
    }

    return <Container>
        <div className="containerInput">
            <i className="fas fa-map-marker-alt"></i>
            <input placeholder="Digite sua cidade" onChange={(event) => {
                setSearch(event.target.value);
                handler(event)
            }}
                value={search}
            />
            <ContainerSuggestion>

                {dataCities.map(({ name }) => {
                    return (
                        <button key={name} onClick={() => handleClickCity(name)}>
                            <h1 className="text">{name}</h1>
                            <span className="text">Estado de {name}</span>
                        </button>
                    )
                })}

            </ContainerSuggestion>
        </div>
        <button disabled={selectedCity.length <= 0 ? true : false} onClick={handleClickSearch}>Buscar</button>
    </Container>
}

export default InputSearch;