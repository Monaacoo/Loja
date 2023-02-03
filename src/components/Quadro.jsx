import React from "react"
import styled from "styled-components";

const Modelo = styled.div`
    background: white;
    margin: 32px 0;
    overflow: hidden;
`

const ModeloInterno = styled.div`
    padding: 32px;
    color: black;
    font-size: 20px;
`
export default function Janela() {

    return <Modelo>
        <ModeloInterno>

        Somos a Send Shirt Store, uma loja online especializada em vendas de camisetas de times e selecoes de alto padrão, contendo todo tipo de estilos.
        Estamos no mercado desde 2022 e, por isso, estamos procurando crescer no mercado online.
        Nosso destaque sempre foi a nossa rapida entrega e o nosso produto sempre de boa qualidade, mas atualmente so entregamos em algumas cidades de Sao Paulo.
        <img src="favicon.jpeg" alt="Logo"/>
        </ModeloInterno>
    </Modelo>
}