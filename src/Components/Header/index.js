import React from 'react';

import LogoUaiFood from '../../Assets/Images/logo-red.jpg';

import InputSearch from '../InputSearch';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="container-header ">
        <img src={LogoUaiFood} />
        <InputSearch fontSize={16} />
      </div>

    </Container>
  );
}

export default Header;