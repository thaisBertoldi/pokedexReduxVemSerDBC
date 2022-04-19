import axios from "axios";
import { connect, RootStateOrAny } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaWeight, FaRulerVertical  } from "react-icons/fa";
import {
  AllInfoESpan,
  ColorDetail,
  DivProgressStats,
  DivType,
  ImgDetail,
  ImgDetailDiv,
  ImgPokeball,
  InfoBarraHorizontal,
  InfoDetailContainer,
  InfoDetailDescript,
  InfoDetailText,
  InfoESpan,
  InfoESpanSemBorda,
  LinkArrow,
  PMoves,
  PokemonNameH1,
  Spans,
  TitleDetail,
  PokeTipo
} from "./Detail.styles";
import imgPokeball from "../../images/Pokeball.png";
import loadingImg from "../../images/loading.gif";
import Error from "../../components/error/Error";
import Color from "../../consts/colorEnums";
import { PokemonsDetailsDTO, PokemonsFilterDetail } from "../../models/PokemonActions";
import { getPokemon } from "../../store/actions/PokemonActions";
import {CalculaAltura, CalculaPeso, HashtagIds} from "../../utils";

function Detail(reducer: RootStateOrAny) {
  const { pokemonsToList, dispatch, pokemonsDetails, loading, error } = reducer;
  const { id } = useParams();
  const [pokemonById, setPokemonById] = useState([]);
  const [description, setDescription] = useState<string | null>("");

  useEffect(() => {
    if (pokemonsDetails.length < 1) {
      getPokemon(pokemonsToList, dispatch);
    }
    getPokemonById();
  }, [pokemonsToList]);

  const getPokemonById = () => {
    const arrPokemonById = pokemonsDetails.filter((pokeById: PokemonsFilterDetail) => {
      if (pokeById.id === Number(id)) {
         getDescriptionPokemon(pokeById.id);
        return pokeById;
      }
      return null;
    });
    setPokemonById(arrPokemonById);
  };

  const getDescriptionPokemon = async (id: string | number) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      setDescription(data.flavor_text_entries[Math.floor(Math.random() * 10)].flavor_text);
    } catch (error) {
      console.log(error);
    }
  };

  if(loading){
    return (
      <img src={loadingImg} alt="charmander hunt" />
    )
  }

  if(error) {
    return (
      <Error />
    )
  }

  return (
    <>
      {pokemonById.map((poke: PokemonsDetailsDTO) => {
        return (
          <ColorDetail color={Color[poke.types[0]?.type.name]}>
            <TitleDetail>
              <LinkArrow to="/">
                <FaArrowLeft />
              </LinkArrow>
              <PokemonNameH1>{poke.name}</PokemonNameH1>
              <p>
                {HashtagIds(poke.id)}
              </p>
            </TitleDetail>
            <ImgPokeball src={imgPokeball} />
            <ImgDetailDiv>
              <ImgDetail
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                alt="Imagem do pokemon"
              />
            </ImgDetailDiv>
            <InfoDetailContainer>
              <DivType color={Color[poke.types[0].type.name]}>
              <PokeTipo color ={Color[poke.types[0].type.name]}><p>{poke.types[0].type.name}</p></PokeTipo>
                <h2>About</h2>
              </DivType>
              <InfoDetailDescript>
                <AllInfoESpan>
                  <InfoESpan>
                    <FaWeight />
                    <p>{CalculaPeso(poke.weight)} kg</p>
                    <Spans margin="0">Weight</Spans>
                  </InfoESpan>

                  <InfoESpan>
                    <FaRulerVertical />
                    <p>{CalculaAltura(poke.height)} m</p>
                    <Spans margin="0">Height</Spans>
                  </InfoESpan>

                  <InfoESpanSemBorda>
                    {poke.abilities.map((ability, index: number) => {
                      return <PMoves key={index}>{ability.ability.name}</PMoves>;
                    })}
                    <Spans margin="23px">Moves</Spans>
                  </InfoESpanSemBorda>
                </AllInfoESpan>
                <div>
                  <p>{description}</p>
                </div>
              </InfoDetailDescript>
              <DivType color={Color[poke.types[0].type.name]}>
                <h2>Base Stats</h2>
              </DivType>
              <InfoDetailText>
                <div>
                  <p>HP</p>
                  <p>ATK</p>
                  <p>DEF</p>
                  <p>SATK</p>
                  <p>SDEF</p>
                  <p>SPD</p>
                </div>
                <div>
                  {poke.stats.map((stat, index: number) => {
                    return <p key={index}>{stat.base_stat}</p>;
                  })}
                </div>
                <InfoBarraHorizontal>
                  {poke.stats.map((stat, index: number) => {
                    return (
                      <DivProgressStats key={index}
                        percent={`${stat.base_stat}`} color={Color[poke.types[0].type.name]}
                      ></DivProgressStats>
                    );
                  })}
                </InfoBarraHorizontal>
              </InfoDetailText>
            </InfoDetailContainer>
          </ColorDetail>
        );
      })}
    </>
  );
}

const mapStateToProps = (state: RootStateOrAny) => ({
  pokemonsToList: state.pokemonReducer.pokemonsToList,
  pokemonsDetails: state.pokemonReducer.pokemonsDetails,
  loading: state.pokemonReducer.loading,
  error: state.pokemonReducer.error,
});

export default connect(mapStateToProps)(Detail);
