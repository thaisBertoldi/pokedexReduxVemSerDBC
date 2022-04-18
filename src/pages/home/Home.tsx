import { getPokemon } from "../../store/actions/PokemonActions";
import { connect, RootStateOrAny } from "react-redux";
import { useEffect, useState } from "react";
import { ColorPokemon, ImgHome, NamePokemon } from "../../AllPages.styles";
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
import { useNavigate } from "react-router-dom";
import { PokemonsDetailsDTO } from "../../models/PokemonActions";
import loadingImg from "../../images/loading.gif";
import Error from "../../components/error/Error";
interface sortDTO {
  id: number;
}

interface pokeDTO {
  label: string;
  value: string;
}

interface pokeSelecionadoDTO {
  name: string;
}

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
      (e: pokeSelecionadoDTO) => e.name === poke.value
    );
    navigate(`/detail/${pokeSelecionado[0].id}`);
  };

  const mapOptions = () => {
    const pokeOptions = pokemonsDetails.map((e: PokemonsDetailsDTO) => {
      return { value: e.name, label: e.name };
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
      {error && (
        <Error />
      )}
      {!loading && (
        <ContainerPokemon>
          {pokemonsDetails.map((e: PokemonsDetailsDTO) => {
            return (
              <ColorPokemon key={e.id} type={e.types[0].type.name}>
                <div>
                  <p>
                    {e.id < 10
                      ? `#00${e.id}`
                      : e.id < 100
                      ? `#0${e.id}`
                      : `#${e.id}`}
                  </p>
                </div>
                <StyledLink to={`/detail/${e.id}`}>
                  <ImgHome
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
                    alt="Imagem do pokemon"
                  />
                </StyledLink>
                <StyledLink to={`/detail/${e.id}`}>
                  <NamePokemon>
                    <PokemonName>{e.name}</PokemonName>
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
