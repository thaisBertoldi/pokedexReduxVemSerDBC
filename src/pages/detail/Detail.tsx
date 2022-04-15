import { getPokemon } from "../../store/actions/PokemonActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail(reducer:any) {
  const { pokemonsToList, dispatch, pokemonsDetails } = reducer;
  const {id} = useParams()
  console.log(id)
  useEffect(() => {
    getPokemon(pokemonsToList, dispatch);
  }, []);

  return (
    <div>Detail</div>
  )
}

const mapStateToProps = (state: any) => ({
  pokemonsToList: state.pokemonReducer.pokemonsToList,
  pokemonsDetails: state.pokemonReducer.pokemonsDetails,
});

export default connect(mapStateToProps)<any>(Detail);
