import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Pokedex from './pages/Pokedex';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonsProvider } from './context/PokemonsContext'
import { PokedexProvider } from './context/PokedexContext';




function App() {

  return (
    <div className="App">
      <PokemonsProvider>
        <PokedexProvider>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/pokedex"} element={<Pokedex />} />
              <Route path={"/:name"} element={<Details />} />
            </Routes>
          </BrowserRouter>
        </PokedexProvider>
      </PokemonsProvider>


    </div>

  )


}

export default App;
