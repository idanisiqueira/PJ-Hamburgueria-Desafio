import React from 'react'; //importando biblioteca do react
import ReactDOM from 'react-dom/client'; 
import GlobalStyle from './styles/globalStyles';
import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'; //para usar bootstrap corretamente nos index.js das páginas
import 'bootstrap/dist/js/bootstrap.bundle'; ////para usar bootstrap corretamente nos index.js das páginas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><Routes /><GlobalStyle /></>);


