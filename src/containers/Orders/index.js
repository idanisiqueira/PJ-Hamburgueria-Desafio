import React, { useState, useEffect } from 'react'; // para usar a biblioteca do React e ferramentas auxiliares
import axios from 'axios'; // para usar API no React
import { useNavigate } from "react-router-dom" // para poder navegar entre as telas do projeto

import LogoTwo from '../../assets/pedido-logo.png'; // logotipo da segunda página
import { BsFillTrashFill } from "react-icons/bs"; // ícone do bootstrap no React

import { Container, Button, Image, ContainerItens, H1, Order, ParagraphOrder } from './styles' //importando elementos estilizados do styles.js

const Orders = () => {

    const [clientOrders, setClientOrders] = useState([]); // react hook para alterar o estado da página, fazendo assim atualizar a informação, acrescentando os valores completos na tela

    const navigate = useNavigate() // para poder navegar para outra tela do projeto

    useEffect(() => { // react hook para recuperar as informações dos pedidos sempre que a página for reiniciada; ele não aceita função async junto dele, por isso deve-se criar uma função async dentro dele
        async function fetchOrders() {
    
          const { data: newOrders } = await axios.get("http://localhost:3001/order");
    
          setClientOrders(newOrders);
    
        };
    
        fetchOrders()
    
      }, [])

      async function deleteOrder(orderId) { // função para deletar o pedido
    
        await axios.delete(`http://localhost:3001/order/${orderId}`)
        
        const newClientOrder = clientOrders.filter(order => order.id !== orderId)
    
        setClientOrders(newClientOrder)
      }

      function goBackPage(){ // função de retornar a página
        navigate('/')
      }

return (
    <Container>
        <ContainerItens>

        <Image alt="logo" src={LogoTwo} />

        <H1>PEDIDOS</H1>
        
        <ul>
          {clientOrders.map((order =>
            <Order key={order.id}>
              <ParagraphOrder>
              <p>{order.order}</p>
              <b>{order.clientName}</b>
              </ParagraphOrder>
              <button onClick={() => deleteOrder(order.id)} id="basic-addon2"><BsFillTrashFill /></button>
            </Order>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>

        </ContainerItens>
    </Container>

)

}

export default Orders