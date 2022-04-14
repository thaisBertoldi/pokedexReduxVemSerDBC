import { getPokemon } from '../../store/actions/PokemonActions'
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface arrayPoke{
    id: number
}

function Home(pokemons:any) {
    const arrayPokemons = pokemons.pokemons;
    const {dispatch} = pokemons
    console.log(arrayPokemons, "olá")
    const [dataobj, setData] = useState<arrayPoke | null>()


    
  return (
    <div>
        <button onClick={() => getPokemon(dispatch)}></button>
    {arrayPokemons.forEach(async (e:any)=>{
            try {
                const {data} = await axios.get(`${e.url}`);
                console.log(data, "esse aqui");
                setData(data)
                
            } catch (error) {
                console.log(error)
            }
            
        })}
    </div>
  )
}

const mapStateToProps = (state:any) => ({
    pokemons: state.pokemonReducer.pokemons,
  });


export default connect(mapStateToProps)<any>(Home)