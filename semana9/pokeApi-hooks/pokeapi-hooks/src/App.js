import React, {useEffect, useState} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App (props){
    const [pokeList, setPokeList] = useState([])
    const [pokeName, setPokeName] = useState('')

// componentDidMount
    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(response => {
            setPokeList(response.data.results)
        })
        .catch(err => {
            console.log("Erro ao buscar lista de pokemos");
        });
    },[])

//Monitorando seleção
    const changePokeName = (event) => {
        setPokeName(event.target.value);
    };


    return(
        <div className="App">
          <select onChange={changePokeName}>
            <option value={""}>Nenhum</option>

            {pokeList.map(pokemon => {
              return (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              )
            })}
            
          </select>
          {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    )
}

export default App