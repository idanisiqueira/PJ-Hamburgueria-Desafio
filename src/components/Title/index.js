import React from 'react';
import { H1 } from './styles' 

function Title({children}){ // botão componetizado para ser usado da mesma forma em todas as páginas em que ele for exportado

    return <H1>{children}</H1>

}

export default Title