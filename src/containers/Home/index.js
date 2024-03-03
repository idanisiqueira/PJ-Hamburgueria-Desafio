import React, { useState } from 'react'; // para usar a biblioteca do React e ferramentas auxiliares
import axios from 'axios'; // para usar API no React

import LogoOne from '../../assets/dev-burguer-logo.png'; // logotipo da primeira página
import { BsFillPersonFill } from "react-icons/bs"; // ícone do bootstrap no React
import { BsCart4 } from "react-icons/bs"; // ícone do bootstrap no React
import { BsFillTrashFill } from "react-icons/bs"; // ícone do bootstrap no React

import { Container, Input, Button, Image, ContainerItens, H1, Order } from './styles' // importando elementos estilizados do styles.js

const App = () => {

  const [ clientOrders, setClientOrders ] = useState([]); // react hook para alterar o estado da página, fazendo assim atualizar a informação, acrescentando os valores completos na tela
  const [ order, setOrder ] = useState(); // react hook para alterar o estado da página, fazendo atualizar a informação, acrescentando o pedido
  const [ name, setName ] = useState(); // react hook para alterar o estado da página, fazendo atualizar a informação, acrescentando o nome
 
  function addNewOrder(){ // função para adicionar o pedido com id, pedido e nome
    setClientOrders([... clientOrders,{id: Math.random(), order, name}]) // uso de spread operator (...) fazendo acrescentar o array antigo + item novo
  }

  function changeInputOrder(event){ // função para captar quando o input for alterado, pegando seu valor (pedido)
    setOrder(event.target.value)
  }

  function changeInputName (event){ // função para captar quando o input for alterado, pegando seu valor (nome)
    setName(event.target.value)
  }

  return (
    <Container>
      <ContainerItens>

        <Image alt="logo" src={LogoOne} />

        <H1>Faça seu pedido!</H1>

        <div className="input-group mb-3"> 
          <span className="input-group-text" id="basic-addon1"><BsCart4 /></span>
          <Input onChange={changeInputOrder} type="text" className="form-control" placeholder="Pedido" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
          <Input onChange={changeInputName} type="text" className="form-control" placeholder="Nome do Cliente" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        
        <ul>
          {clientOrders.map((order =>
            <Order key={order.id}>
              {order.order}<div></div>{order.name}
              <button id="basic-addon2"><BsFillTrashFill /></button>
            </Order>
          ))}
        </ul>

      </ContainerItens>
    </Container>

  );
}

export default App