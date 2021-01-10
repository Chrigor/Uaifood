import React from 'react';

import LogoUaiFood from '../../Assets/Images/logo-white.jpg';
import { Container, ContainerMiddlew } from './styles';

import InputSearch from '../../Components/InputSearch';


function Home() {
    return <Container>
        <header>
            <img src={LogoUaiFood} alt="Logo Uaifood" />
        </header>
        <ContainerMiddlew>
            <h1>Descubra os melhores restaurantes em sua cidade</h1>
            <InputSearch />
        </ContainerMiddlew>
    </Container>
}

export default Home;