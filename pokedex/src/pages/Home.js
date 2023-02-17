import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { PokemonsContext } from "../context/PokemonsContext";
import { PokedexContext } from "../context/PokedexContext";
import React, { useContext } from "react";

const Header = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
font-family: 'Pokemon Solid', sans-serif;


`
const Body = styled.body`
display:flex;
flex-wrap:wrap;
justify-content:center;
width:100%;
height:100%;
`
const DivGlobal = styled.div`
background: gray;
`
const Cards = styled.div`
display:grid;
position:relative;
border:2px solid black;
width:200px;
height:300px;
margin-left:50px;
margin-top:10px;
border-radius:7px;
background: rgba(255,255,255,0.2);
backdrop-filter: blur(10px);
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.2);
box-shadow: 2px 2px 2px rgba(255,255,255,0.2);
margin:20px 20px;

`
const Button = styled.button`
background:none;
border:none;
width: 60px;
cursor: pointer;

h1{
    width:100%;
    color: white;
    width:160px;
    height:-10px;
    align-items: center;
    margin-left:50px;
    margin-top:10px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
}

&:hover{
    transform: translateY(-3px);
}

@media (max-width: 800px) {
    
    position:fixed;
    bottom:5px;
    right:5px;
}


`
const ButtonsCard = styled.button`
width:100px;
height:45px;
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
width:100%;
color: white;

`
const Imagem = styled.img`
margin-top:10px;
margin-left:10px;
width:175px;
`


function Home() {
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useContext(PokemonsContext);
    const [pokedex, setPokedex] = useContext(PokedexContext); //adicionar pokemon na pokedex

    // Adicionar Pokemons na pokedex

    const addPokemon = (choosePokemon) =>{
        setPokemons(pokemons.filter(pokemon => pokemon.name !== choosePokemon.name))
        setPokedex([...pokedex,choosePokemon])
    }


        const pokemonsList = pokemons && pokemons.map((pokemon, id) => {

        return <Cards key={id} >
            <Imagem src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}></Imagem>
            <h2>{pokemon.name}</h2>
            <Div>
                
                <ButtonsCard onClick={() => navigate(`/${pokemon.name}`)}>Detalhes</ButtonsCard>

                <ButtonsCard onClick={() => addPokemon(pokemon)}>Adicionar a pokedex</ButtonsCard>
                
            </Div>

        </Cards>
    })


    return (
        <DivGlobal>
            <Header>
            <Button onClick={() => navigate("/pokedex")}><h1>Pokedex</h1></Button>
                <H2>Lista de Pokemons</H2>
                

            </Header>
            <Body>
                {pokemonsList}

            </Body>

        </DivGlobal>

    )

}

export default Home;