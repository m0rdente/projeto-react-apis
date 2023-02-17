import { createContext, useEffect, useState } from "react";
import axios from "axios"

//Essa pasta precisa existir para adicionar e remover os pokemons

export const PokemonsContext = createContext();
export const PokemonsProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {

    let id = 0;

    axios.get("https://pokeapi.co/api/v2/pokemon-form/?limit=20&offset=0")
      .then((response) => {
        setPokemons(response.data.results.map(pokemon => {
          id++;
          return { ...pokemon, id: id }
        }))
      }).catch((err) => {
        console.log(err.response)

      })
  }, [])

  return (
    <PokemonsContext.Provider value={[pokemons, setPokemons]}>
      {children}
    </PokemonsContext.Provider>
  )
}

