import React from 'react';

import LogoTwo from '../../assets/pedido-logo.png';
import { BsFillTrashFill } from "react-icons/bs";

import { Container, Input, Button, Image, ContainerItens, H1 } from './styles'

const Orders = () => {

return (
    <Container>
        <ContainerItens>

        <Image alt="logo" src={LogoTwo} />

        <H1>PEDIDOS</H1>
        
        <ul>
    
              <button id="basic-addon2"><BsFillTrashFill /></button>
            
        </ul>

        <Button>Voltar</Button>

        </ContainerItens>
    </Container>

)

}

export default Orders