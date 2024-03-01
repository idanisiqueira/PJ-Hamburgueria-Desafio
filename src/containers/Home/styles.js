import styled from "styled-components";
import Background from "../../assets/bg.png"

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
height: 100vh;
`;

export const ContainerItens = styled.div`
border-radius: 31px 31px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;
`;

export const Image = styled.img `
width: 200px;
margin: 40px auto;
`;

export const H1 = styled.h1`
color: #fff;
font-family: 'Karla', sans-serif;
font-weight: 700;
font-size: 25px;
margin-bottom: 30px;
text-align: center;
`;

export const Input = styled.input`
border-radius: 5px;
background: rgba(255, 255, 255,0.5);
box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
border: none;
outline: none;
width: 220px;
height: 40px;
padding: 15px;

color: #fff;

font-family: 'Karla', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Button = styled.button`
border-radius: 5px;
background: #B22222;
width: 280px;
height: 50px;
color: #fff;
border: none;

cursor: pointer;

font-family: 'Karla', sans-serif;
font-size: 15px;
font-style: normal;
line-height: 28px;
margin-top: 30px;

&:hover {

opacity: 0.8;

}

&:active {

color: #000;
    
}
`;