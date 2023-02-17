import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokedexContext } from "../context/PokedexContext";
import { PokemonsContext } from "../context/PokemonsContext";
import { useContext } from "react";

const Header = styled.header`
display:flex;
justify-content: space-between;
font-family: 'Pokemon Solid', sans-serif;
`
const Body = styled.body`
display:flex;
flex-wrap:wrap;
width:100%;
height:90vh;

@media (max-width:800px) {
    
    display:flex;
    flex-wrap:wrap;
    width:100%;
    height:100%;
    
}

`
const Cards = styled.div`
display:flex;
flex-wrap:wrap;
position:relative;
justify-content:center;
border:2px solid black;
width:200px;
height:300px;
margin-left:50px;
margin-top:70px;
border-radius:7px;
background: rgba(255,255,255,0.2);
backdrop-filter: blur(10px);
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.2);
box-shadow: 2px 2px 2px rgba(255,255,255,0.2);


`
const DivGlobal = styled.div`
background: gray;
width: 100%;
height: 100%;

@media (max-width:800px) {
    
    width:100%;
    height:100%;
    
}

`
const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
width:100px;
height:40px;
margin-right:10px;
margin-top:10px;
font-family: sans-serif;
background-color: white;
font-weight: bold;
border: none;
border-radius: 100px;


&:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

`
const ButtonsCard = styled.button`
width:100px;
height:43px;
background: rgb(238,237,174,0.2);
backdrop-filter: blur(10px);
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.2);
cursor: pointer;

&:hover{
    background: rgb(700, 17,0.2);
}

`
const Div = styled.div`
display:flex;
flex-direction:row;

`
const H2 = styled.h2`
display:flex;
justify-content:center;
font-size:50px;
color: white;
width:100%;

@media (max-width:800px) {
    display:flex;
    justify-content:center;
    margin-left:100px;

    
}
`
const Imagem = styled.img`
margin-top:10px;
margin-left:10px;
width:175px;

`


function Pokedex() {
    const navigate = useNavigate()
    const [pokemons, setPokemons] = useContext(PokemonsContext);//volta o pokemon para a lista de pokemons
    const [pokedex, setPokedex] = useContext(PokedexContext);//remover o pokemon da pokedex

    //Remover pokemons da pokedex
    const removePokemon = (choosePokemon) => {
        setPokedex(pokedex.filter(pokemon => choosePokemon.name !== pokemon.name))
        setPokemons([choosePokemon,...pokemons])

    }

    const pokemonsList = pokedex.map((pokemon) => {

        return <div><Cards key={pokemon.id}>
            <Imagem src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}></Imagem>
            <h2>{pokemon.name}</h2>
            <Div>
                <ButtonsCard onClick={() => removePokemon(pokemon)}>Remover da pokedex</ButtonsCard>
                <ButtonsCard onClick={() => navigate(`/${pokemon.name}`)}>Ver detalhes</ButtonsCard>
            </Div>
        </Cards>

        </div>


    })
    return (
        <DivGlobal>
            <Header>
                <H2>Pokedex </H2>
                <Button onClick={() => navigate("/")}>Voltar</Button>
            </Header>
            <Body>
                {pokemonsList}
            </Body>
        </DivGlobal>
    )




}
export default Pokedex;