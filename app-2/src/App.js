import './App.css';
import React, {useState, useEffect} from 'react';
import DisplayPokemon from './components/DisplayPokemon'
import axios from 'axios'

function App() {
  const [pokemon, updatePokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/berry')
    .then((res) => {
      // console.log(res.data.results)
      updatePokemon(res.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <DisplayPokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
