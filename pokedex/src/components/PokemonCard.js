import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.pokemon = props.pokemon;
        this.state = {
            caught: this.pokemon.date ? true : false
        };

        this.catch = this.catch.bind(this);
    }

    catch() {
        fetch('http://localhost:3001/pokemons/'+ this.pokemon.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({name: this.pokemon.name, id: this.pokemon.id, date : new Date()})
          })
          .then(() => this.setState({
              caught: true
          }));
    }

    render() {
        return (
            <div className="card col-sm-4">
                <div className="card-header">
                    <Link to={`/pokemons/${this.pokemon.id}`}>{this.pokemon.name}</Link>
                </div>                
                <div className="card-body">
                    <Link to={`/pokemons/${this.pokemon.id}`}>
                        <img src={`/pokemons/${this.pokemon.id}.png`} className="card-img-top" alt={this.pokemon.name} />
                    </Link>
                    <button className="btn btn-primary btn-lg" onClick={this.catch} disabled={this.state.caught}>Catch</button>
                </div>
            </div>
        )
    }
} 