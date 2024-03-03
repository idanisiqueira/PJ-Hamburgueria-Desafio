import React from 'react'; //para usar biblioteca do React

import LogoTwo from '../../assets/pedido-logo.png'; // logotipo da segunda página
import { BsFillTrashFill } from "react-icons/bs"; // ícone do bootstrap no React

import { Container, Button, Image, ContainerItens, H1 } from './styles' //importando elementos estilizados do styles.js

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