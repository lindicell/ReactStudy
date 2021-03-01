import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/app.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }


  render() {
    console.log("render");
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
          adicionarCategoria = {this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias} />
        </main>
        <ListaDeNotas
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          notas={this.notas}
        />
      </section>
    );
  }
}

export default App;
