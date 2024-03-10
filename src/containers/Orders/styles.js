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
font-family: "Roboto", sans-serif;
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

font-family: "Roboto", sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Button = styled.button`
border-radius: 5px;
background: #B22222;
width: 260px;
height: 50px;
color: #fff;
border: none;

cursor: pointer;

font-family: "Roboto", sans-serif;
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

export const Order = styled.li `
color:#fff;
display: flex;
justify-content: space-around;
align-items: center;
line-height: 10px;


border-radius: 5px;
background: rgba(255, 255, 255,0.5);
box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
border: none;
outline: none;
width: 255px;
height: 60px;

font-family: "Roboto", sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
margin: 15px;
margin-left: -30px;
`;

export const ParagraphOrder = styled.div`
  p {
    align-content: space-between;
    width: 188px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    color: #ffffff;
  }
`;
