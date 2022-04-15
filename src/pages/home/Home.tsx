import { getPokemon } from "../../store/actions/PokemonActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { ColorPokemon, ImgHome, NamePokemon, FullPageHome, ContainerPokemon } from "../../AllPages.styles";

function Home(reducer: any) {
  const { pokemonsToList, dispatch, pokemonsDetails } = reducer;

  useEffect(() => {
    getPokemon(pokemonsToList, dispatch);
  }, []);

  return (
    <FullPageHome>
      <h1>Pokemons</h1>
      <ContainerPokemon>
      {pokemonsDetails.map((e: any) => {
        return (
            <ColorPokemon key={e.id} type={e.types[0].type.name}>
              <div><p>{e.id}</p></div>
              <ImgHome
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
                alt="Imagem do pokemon"
              />
              <NamePokemon><p>{e.name}</p></NamePokemon>
            </ColorPokemon>
        );
      })}
      </ContainerPokemon>
    </FullPageHome>
  );
}

const mapStateToProps = (state: any) => ({
  pokemonsToList: state.pokemonReducer.pokemonsToList,
  pokemonsDetails: state.pokemonReducer.pokemonsDetails,
});

export default connect(mapStateToProps)<any>(Home);
