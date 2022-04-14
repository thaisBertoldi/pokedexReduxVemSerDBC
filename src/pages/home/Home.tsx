import { getPokemon } from "../../store/actions/PokemonActions";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function Home(reducer: any) {
  const { pokemons, dispatch } = reducer;
  // const [dataobj, setData] = useState<arrayPoke | null>();

  // const tryPoke = async (variavel: any) => {
  //   try {
  //     const { data } = await axios.get(`${variavel}`);
  //     console.log(data, "esse aqui");
  //     // setData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <h1>Pokemons</h1>
      <button onClick={() => getPokemon(dispatch)}>Catch Pokemon</button>
      {pokemons.map((e: any, index: number) => {
        return (
          <div key={index}>
            <p>{e.name}</p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.pokemons,
});

export default connect(mapStateToProps)<any>(Home);
