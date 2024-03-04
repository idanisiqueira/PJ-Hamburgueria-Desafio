import React, { useState, useRef } from 'react'; // para usar a biblioteca do React e ferramentas auxiliares
import axios from 'axios'; // para usar API no React

import LogoOne from '../../assets/dev-burguer-logo.png'; // logotipo da primeira página
import { BsFillPersonFill } from "react-icons/bs"; // ícone do bootstrap no React
import { BsCart4 } from "react-icons/bs"; // ícone do bootstrap no React

import { Container, Input, Button, Image, ContainerItens, H1 } from './styles' // importando elementos estilizados do styles.js

const App = () => {

  const [clientOrders, setClientOrders] = useState([]); // react hook para alterar o estado da página, fazendo assim atualizar a informação, acrescentando os valores completos na tela
  const inputOrder = useRef(); // pegando as informações de referência no input com o react hook useRef
  const inputName = useRef(); // pegando as informações de referência no input com o react hook useRef

  async function addNewOrder() { // função para adicionar o pedido com id, pedido e nome
    const { data: newOrder } = await axios.post("http://localhost:3001/order", { order: inputOrder.current.value, clientName: inputName.current.value })

    setClientOrders([...clientOrders, newOrder]) // uso de spread operator (...) fazendo acrescentar o array antigo + item novo
  }

  return (
    <Container>
      <ContainerItens>

        <Image alt="logo" src={LogoOne} />

        <H1>Faça seu pedido!</H1>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><BsCart4 /></span>
          <Input ref={inputOrder} type="text" className="form-control" placeholder="Pedido" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
          <Input ref={inputName} type="text" className="form-control" placeholder="Nome do Cliente" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>

  );
}

export default App