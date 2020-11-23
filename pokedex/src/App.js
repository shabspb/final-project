import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import NavBar from './components/Layout/NavBar';
import PokemonCaught from './components/PokemonCaught';


export default function App() {
  return (    
    <BrowserRouter>
      <div className="App-wrapper">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Pokemon} />
            <Route path="/pokemons/:id" component={PokemonList} />
            <Route path="/caught" component={PokemonCaught} />
          </Switch>
      </div>
    </BrowserRouter>    
  );
}