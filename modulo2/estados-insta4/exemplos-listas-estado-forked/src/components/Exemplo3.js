import React from "react";

// Esse exemplo demonstra como a lista pode estar armazenada no
// estado, ao invés de numa variável dentro da função render.
// Não existe nenhuma diferença prática por enquanto. As listas
// no estado podem ser alteradas, e as que estão nas variáveis não,
// mas isso veremos no outro conjunto de exemplos.

// Exercício: Faça cada item da lista aparecer em um <li>, ao invés de
// em um <p>. Garanta que observou a mudança acontecer na tela.

class Exemplo3 extends React.Component {
  // Inicializando o estado
  state = {
    // O estado possui uma variável chamada pessoas, que possui um
    // array de pessoas.
    pessoas: ["Amanda", "João"]
  };

  addNome = () => {
    this.setState({ pessoas: [...this.state.pessoas, "Eu"] });
  };
  render() {
    // Acessamos o array de pessoas dentro do estado (this.state.pessoas)
    // e ai usamos o método map para transformá-lo em um array de componentes
    const listaDeComponentes = this.state.pessoas.map((pessoa, index) => {
      return <li key={index}>{pessoa}</li>;
    });

    return (
      <div>
        <h1>Exemplo 3</h1>
        <button onClick={this.addNome}>Adicionar</button>

        <div>
          <ul>{listaDeComponentes}</ul>
        </div>
      </div>
    );
  }
}

export default Exemplo3;
