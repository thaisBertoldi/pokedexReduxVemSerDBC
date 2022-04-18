import { useNavigate } from "react-router-dom";
import { connect, RootStateOrAny } from "react-redux";
import { useEffect, useState } from "react";
import {
  FullPageHome,
  ContainerPokemon,
  StyledLink,
  PokemonName,
  TitleHomeDiv,
  CgPokemonStyled,
  StyledSelect,
  SelectDiv,
  DivImgLoading,
} from "./Home.details";
import {
  PokemonsDetailsDTO,
  sortDTO,
  pokeDTO,
  pokeSelecionadoDTO,
} from "../../models/PokemonActions";
import loadingImg from "../../images/loading.gif";
import Error from "../../components/error/Error";
import { ColorPokemon, ImgHome, NamePokemon } from "../../AllPages.styles";
import { HashtagIds } from "../../utils";
import { getPokemon } from "../../store/actions/PokemonActions";

function Home(reducer: any) {
  const { pokemonsToList, dispatch, pokemonsDetails, loading, error } = reducer;
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (pokemonsToList.length === 1) {
      getPokemon(pokemonsToList, dispatch);
    }
  }, []);

  useEffect(() => {
    pokemonsDetails.sort((a: sortDTO, b: sortDTO) => {
      return a.id - b.id;
    });
    mapOptions();
  }, [pokemonsDetails]);

  const setupNavigate = (poke: pokeDTO) => {
    const pokeSelecionado = pokemonsDetails.filter(
      (pokemon: pokeSelecionadoDTO) => pokemon.name === poke.value
    );
    navigate(`/detail/${pokeSelecionado[0].id}`);
  };

  const mapOptions = () => {
    const pokeOptions = pokemonsDetails.map((pokemon: PokemonsDetailsDTO) => {
      return { value: pokemon.name, label: pokemon.name };
    });
    setSearchedPokemons(pokeOptions);
  };

  return (
    <FullPageHome>
      <TitleHomeDiv>
        <CgPokemonStyled />
        <h1>Pokedex</h1>
      </TitleHomeDiv>

      <SelectDiv>
        <StyledSelect
          placeholder={"Search your pokemon"}
          options={searchedPokemons}
          onChange={(poke: any) => setupNavigate(poke)}
        />
      </SelectDiv>

      {loading && (
        <DivImgLoading>
          <img src={loadingImg} alt="charmander hunt" />
        </DivImgLoading>
      )}
      {error && <Error />}
      {!loading && (
        <ContainerPokemon>
          {pokemonsDetails.map((pokemon: PokemonsDetailsDTO) => {
            return (
              <ColorPokemon key={pokemon.id} type={pokemon.types[0].type.name}>
                <div>
                  <p>
                    {HashtagIds(pokemon.id)}
                  </p>
                </div>
                <StyledLink to={`/detail/${pokemon.id}`}>
                  <ImgHome
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt="Imagem do pokemon"
                  />
                </StyledLink>
                <StyledLink to={`/detail/${pokemon.id}`}>
                  <NamePokemon>
                    <PokemonName>{pokemon.name}</PokemonName>
                  </NamePokemon>
                </StyledLink>
              </ColorPokemon>
            );
          })}
        </ContainerPokemon>
      )}
    </FullPageHome>
  );
}

const mapStateToProps = (state: RootStateOrAny) => ({
  pokemonsToList: state.pokemonReducer.pokemonsToList,
  pokemonsDetails: state.pokemonReducer.pokemonsDetails,
  loading: state.pokemonReducer.loading,
  error: state.pokemonReducer.error,
});

export default connect(mapStateToProps)(Home);
