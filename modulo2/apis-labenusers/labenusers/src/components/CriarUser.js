import axios from "axios";
import styled from "styled-components";
import React, { Component } from 'react'

const Tela = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Tela2 = styled.div`
    display: flex;
    height: 50vh;
    justify-content: space-around;
    align-items: center;

    label{ 
        font-size: 1.5em;

    }
    input{
        height: 1.5em;
        background-color: beige;
        border-radius: 6px;
    }
`

const Botao = styled.button`
    background: black;
    border-radius: 10px;
    color: white;
    height: 3em;


    :hover {
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    }

    :before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

    :active {
        color: #000
    }

    :active:after {
    background: transparent;
    }   

    :hover:before {
    opacity: 1;
}
    :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}


`

const Div = styled.div`
height:50px;
`

export default class CriarUser extends Component {
    render() {
        return (
            <>
                <Tela>
                    <Botao onClick={this.props.trocartela}>Trocar de Tela</Botao>
                </Tela>
                <Div>

                </Div>
                <Tela2>
                    <label for="Nome">Nome:
                        <input
                            placeholder="Nome"
                            onChange={this.props.onChangeName}
                            value={this.props.valueNome} />
                    </label>

                    <label for="Email">E-mail:
                        <input
                            placeholder="E-mail"
                            onChange={this.props.onChangeEmail}
                            value={this.props.valueEmail} />
                    </label>

                    <Botao onClick={this.props.createUsers}>Criar Usuário</Botao>
                </Tela2>
            </>
        )
    }
}
