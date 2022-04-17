import { InitialDTO } from "../../models/PokemonActions"

const INITIAL_STATE:InitialDTO ={
    activePokemon:{},
    pokemonsToList:[{
        name: "",
        url: ""
    }],
    loading: true,
    error: false,
    pokemonsDetails:[],
}

const pokemonReducer = (state = INITIAL_STATE, action:any) =>{
    if(action.type === 'GET_POKEMON'){
        return{
            ...state,
            pokemonsToList: action.pokemonsToList, 
            loading: action.loading,
            error: action.error
        }
    }
    if(action.type === 'GET_DETAILS_POKEMONS'){
        return{
            ...state,
            pokemonsDetails: [...state.pokemonsDetails, action.pokemonsDetails]
        }
    }

    return state
}

export default pokemonReducer;
