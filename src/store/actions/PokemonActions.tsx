import { api } from "../../api"

export const getPokemon = async (dispatch:any) =>{
    try {
        const { data } = await api.get('')
        console.log(data.results) 
        const obj = {
            type: 'GET_POKEMON',
            pokemons: data.results
        }
        dispatch(obj)
    } catch (error) {
        console.log(error)
    }
}