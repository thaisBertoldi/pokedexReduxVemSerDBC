import { getPokemon } from "../../store/actions/PokemonActions";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function Home(reducer: any) {
  const { pokemonsToList, dispatch, pokemonsDetails } = reducer;
  // const [dataobj, setData] = useState<arrayPoke | null>();
  console.log(reducer)

  const mapear = () => {
    //     arrayPokemons.map(async (e:any) => {
    //         try {
    //           const { data } = await axios.get(`${e.url}`);
                
              
    //         } catch (error) {
    //           console.log(error);
    //         }
            
    //     })
          
    //   }
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <button onClick={() => getPokemon(pokemonsToList, dispatch)}>Catch Pokemon</button>
      {pokemonsDetails.map((e: any) => {
        return (
          <div key={e.id} className={e.type}>
            <p>{e.name}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`} />
          </div>
        );
      })}
      <button onClick={()=> console.log(pokemonsDetails)}/>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  pokemonsToList: state.pokemonReducer.pokemonsToList,
  pokemonsDetails: state.pokemonReducer.pokemonsDetails
});

export default connect(mapStateToProps)<any>(Home);