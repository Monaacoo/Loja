import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    overflow: hidden;
    color: #fff;
`
const ModeloTitulo = styled.div`
    font-size: 30pt;
    text-align: center;
    padding: 15px 0;
`

const ModeloLinks = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    
`

export default function Navegacao(){
    return <Modelo>
        <ModeloTitulo>Send Shirt Store</ModeloTitulo>

        <ModeloLinks>

            <a href="/">Inicio</a>
            <a href="/promocao">Queima de estoque</a>
            <a href="/carrinho">Sacola</a>
            <a href="/somos">Quem somos</a>
            <a href="https://www.instagram.com/send.shirtstore/">Saiba Mais</a>

        </ModeloLinks>
        
    </Modelo>
}