import axios from "axios";
import { api } from "../../api";

export const getPokemon = async (state: any, dispatch: any) => {
  try {
    const { data } = await api.get("/?offset=0&limit=160");
    const obj = {
      type: "GET_POKEMON",
      pokemonsToList: data.results,
      loading: false,
    };
    dispatch(obj);
    getPokemons(obj, dispatch);
  } catch (error) {
    console.log(error);
    const obj ={
      type: "GET_POKEMON",
      loading: false,
      error: true,
    }
    dispatch(obj)
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
        loading: false,
      };
      dispatch(obj);
    } catch {
      const obj ={
        type: "GET_DETAILS_POKEMONS",
        loading: false,
        error: true,
      }
      dispatch(obj)
    }
  });
};
