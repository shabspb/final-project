import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

export default class Pokemon extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false, 
      pokemons: []
    };
    this.currentPage = 1;    

    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    let request = this.props.caught ? "http://localhost:3001/pokemons?date_ne&_limit=15&_page=" : "http://localhost:3001/pokemons?_limit=12&_page=";
    fetch(request + this.currentPage)
    .then(response => response.json())
    .then(data => {
      this.state.pokemons.push(...data);
      this.currentPage++;
      this.setState({isLoad : true });
    })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    if  (this.state.isLoad) {
      const pokemonCards = this.state.pokemons.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />
      });
      return (
        <main>          
            <div className="pokemonList">{pokemonCards}</div> 
            <button className="btn btn-primary btn-lg btn-block" onClick = {this.loadData}>Load more...</button>
        </main>
      );
    } else {
      return <span className="App-load">Loading...</span>
    }
  }
}