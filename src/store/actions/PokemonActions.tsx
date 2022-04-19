import axios from "axios";
import { AppDispatch } from "..";
import { api } from "../../api";
import { InitialDTO, PokemonToListDTO } from "../../models/PokemonActions";

export const getPokemon = async (state: InitialDTO, dispatch: AppDispatch) => {
  try {
    const { data } = await api.get("/?offset=0&limit=160");
    const pokemonData = {
      type: "GET_POKEMON",
      pokemonsToList: data.results,
      loading: false,
    };
    dispatch(pokemonData);
    getPokemons(pokemonData, dispatch);
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
export const getPokemons = async (state: PokemonToListDTO, dispatch: AppDispatch) => {
  state.pokemonsToList.map(async (pokeList) => {
    try {
      const { data } = await axios.get(`${pokeList.url}`);
      const pokeDetailData = {
        type: "GET_DETAILS_POKEMONS",
        pokemonsDetails: data,
        loading: false,
      };
      dispatch(pokeDetailData);
    } catch {
      const pokeDetailData ={
        type: "GET_DETAILS_POKEMONS",
        loading: false,
        error: true,
      }
      dispatch(pokeDetailData)
    }
  });
};
