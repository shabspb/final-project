import React, { Component } from 'react';
import './PokemonList.css';

export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false
        };
        this.pokemonId = props.match.params.id;
        
        this.loadData = this.loadData.bind(this);
        this.catch = this.catch.bind(this);
    }

    catch() {
        fetch('http://localhost:3001/pokemons/'+ this.pokemonId, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({name: this.state.pokemon.name, id: this.state.pokemon.id, date: new Date()})
          })
        .then(responce => responce.json())
        .then(data => this.setState({
            isLoad : true, 
            pokemon : data, 
            caught: data.date ? true : false
        }))
        .catch(error => console.error(error))
    }

    loadData() {
        fetch("http://localhost:3001/pokemons/" + this.pokemonId)
            .then(responce => responce.json())
            .then(data => this.setState({
                isLoad: true,
                pokemon: data,
                caught: data.date ? true : false
            }))
            .catch(error => console.error(error))
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        if (this.state.isLoad){
        return (
            <div className="card">
                <div className="card-header">{this.state.pokemon.name}</div>
                <img src={`/pokemons/${this.state.pokemon.id}.png`} className="card-img-top" alt={this.state.pokemon.name}/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.pokemon.date ? new Date(this.state.pokemon.date).toString() : ""}</h5>
                    <button className="btn btn-primary btn-lg" onClick={this.catch} disabled={this.state.caught}>Catch</button>
                </div>
            </div>
        )
        } else {
            return <span className="App-load">Loading...</span>
        }
    }    
}