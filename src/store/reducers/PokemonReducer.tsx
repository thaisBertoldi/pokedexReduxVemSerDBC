import { InitialDTO } from "../../models/InitialDTO"

const INITIAL_STATE:InitialDTO ={
    activePokemon:{},
    pokemons:[{
        name: "",
        url: ""
    }]
}

const pokemonReducer = (state = INITIAL_STATE, action:any) =>{
    if(action.type === 'GET_POKEMON'){
        return{
            ...state,
            pokemons: action.pokemons
        }
    }
    return state
}

export default pokemonReducer;
