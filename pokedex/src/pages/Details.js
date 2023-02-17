import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Header = styled.header`
display:flex;
justify-content:space-between;
font-family: 'Pokemon Solid', sans-serif;
`

const Body = styled.body`
display:flex;
justify-content:center;
flex-wrap:wrap;
width:100%;
height:100%;
`
const DivGlobal = styled.div`
width:100%;
height:100%;
background: gray;
`
const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
width:100px;
height:40px;
margin-left:10px;
margin-top:10px;
font-family: sans-serif;
background-color: white;
font-weight: bold;
border:none;
border-radius: 100px;


&:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

`
const ButtonImg = styled.button`
display:flex;
justify-content:space-between;
background:none;
border:none;
margin-right:50px;

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

const Imagem = styled.img`
margin-top:10px;
margin-left:10px;
width:150px;
height:200px;
`

const BoxImagens = styled.div`
width: 200px;
margin: 20px;
padding: 0;
img {
    width: 100%;
    object-fit: cover;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    box-shadow: 0 0 3px #888;
}
`
const BoxStats = styled.div`
margin: 20px;
width: 200px;
height:300px;
border: 1px solid #ccc;
padding: 10px;
text-transform: capitalize;
box-shadow: 0 0 3px #888;
h3 {
    text-align: center;
    margin: 0;
}
`
const BoxTypes = styled.div`
margin: 20px 20px 20px 20px;
width: 200px;


div{
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #888;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
     
}
`

function Details() {

    const navigate = useNavigate();
    const { name } = useParams();
    const [stats, setStats] = useState([]);
    const [imagem, setImagem] = useState({});
    const [types, setTypes] = useState([]);




    useEffect(() => {
        // console.log(name)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                console.log(response.data)
                setImagem(response.data.sprites);
                setStats(response.data.stats);
                setTypes(response.data.types);


            }).catch(() => {
            })
    }, [])

    const listDetails = stats.map((stat, id) => {
        return <p key={id}>{stat.stat.name}:{stat.base_stat}</p>
    })

    const listType = types.map((type, id) => {
        return <div key={id}>{type.type.name}</div>
    })


    return (
        <DivGlobal>
            <Header>
                <Button onClick={() => navigate("/")}>Voltar</Button>
                
                <ButtonImg onClick={() => navigate("/pokedex")}><h1>Pokedex</h1></ButtonImg>
            </Header>

            <Body>
                <BoxImagens>
                    <h2>{name}</h2>
                    <Imagem src={imagem.front_default} />
                    <Imagem src={imagem.back_default} />
                </BoxImagens>
                <BoxTypes>
                    <h3>Tipo</h3>
                    {listType}
                </BoxTypes>
                <BoxStats>
                    <h3>Detalhes</h3>
                    {listDetails}
                </BoxStats>

            </Body>

        </DivGlobal>
    )
}

export default Details;