import React from 'react';

import LogoOne from '../../assets/dev-burguer-logo.png';
import { BsFillPersonFill } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";

import { Container, Input, Button, Image, ContainerItens, H1 } from './styles'

const Home = () => {

return (
    <Container>
        <ContainerItens>

        <Image alt="logo" src={LogoOne} />

        <H1>Faça seu pedido!</H1>
        
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><BsCart4 /></span>
          <Input type="text" className="form-control" placeholder="Pedido" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
          <Input type="text" className="form-control" placeholder="Nome do Cliente" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <Button>Novo Pedido</Button>

        </ContainerItens>
    </Container>

)

}

export default Home