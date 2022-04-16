import { api } from "../../api";
import axios from "axios";
import { InitialDTO } from "../../models/PokemonActions";

export const getPokemon = async (state: any, dispatch: any) => {
  try {
    const { data } = await api.get("/?offset=0&limit=160");
    console.log("chamou aqui");
    const obj = {
      type: "GET_POKEMON",
      pokemonsToList: data.results,
    };
    dispatch(obj);
    getPokemons(obj, dispatch);
  } catch (error) {
    console.log(error);
  }
};

// second get
export const getPokemons = async (state: any, dispatch: any) => {
  state.pokemonsToList.map(async (e: any) => {
    try {
      const { data } = await axios.get(`${e.url}`);
      const obj = {
        type: "GET_DETAILS_POKEMONS",
        pokemonsDetails: data,
      };
      dispatch(obj);
    } catch {}
  });
};

// // detail get

// export const getDetailPokemon = async (state: any, dispatch: any) => {
//   try {
//     const { data } = await axios.get(`/${e.url}`);
//     const obj = {
//       type: "GET_DETAILS_POKEMONS",
//       pokemonsDetails: data,
//     };
//     dispatch(obj);
//   } catch {}
// };
