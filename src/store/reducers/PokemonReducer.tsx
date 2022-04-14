import { InitialDTO } from "../../models/InitialDTO"

const INITIAL_STATE:InitialDTO ={
    activePokemon:{},
    pokemons:[]
}

const pokemonReducer = (state = INITIAL_STATE, action:any) =>{
    if(action.type === 'GET_POKEMON'){
        return{
            ...state,
            pokemons: action.pokemons
        }
    }
}

export default pokemonReducer;
