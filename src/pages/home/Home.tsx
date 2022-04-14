import { getPokemon } from "../../store/actions/PokemonActions";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

interface arrayPoke {
  id: number;
}[]

function Home(pokemons: any) {
  const arrayPokemons = pokemons.pokemons;
  const { dispatch } = pokemons;
  console.log(arrayPokemons, "olá");
  const [arrayId, setArrayId] = useState<arrayPoke | null>()

  const mapear = () => {
    arrayPokemons.map(async (e:any) => {
        try {
          const { data } = await axios.get(`${e.url}`);
            arrayId.push(data.id)
          
        } catch (error) {
          console.log(error);
        }
        
    })
      
  }

  return (
    <>
      <button onClick={() => getPokemon(dispatch)}>get pokemon</button>
      {arrayPokemons.map}
    </>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.pokemons,
});

export default connect(mapStateToProps)<any>(Home);
