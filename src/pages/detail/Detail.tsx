import { getPokemon } from "../../store/actions/PokemonActions";
import { connect, RootStateOrAny } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import imgPokeball from "../../images/Pokeball.png";
import axios from "axios";
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
} from "./Detail.styles";
import { DetailDTO } from "../../models/PokemonActions";
import { FaWeight, FaRulerVertical  } from "react-icons/fa";
import loadingImg from "../../images/loading.gif";
import Error from "../../components/error/Error";

interface ColorDTO {
  name: string,
  url: string,
}

function Detail(reducer: any) {
  const { pokemonsToList, dispatch, pokemonsDetails, loading, error } = reducer;
  const { id } = useParams();
  const [pokemonById, setPokemonById] = useState([]);
  const [description, setDescription] = useState<string | null>("");
  const [color, setColor] = useState<ColorDTO>({name: '', url: ''})

  useEffect(() => {
    if (pokemonsDetails.length < 1) {
      getPokemon(pokemonsToList, dispatch);
    }
    getPokemonById();
  }, [pokemonsToList]);

  const getPokemonById = () => {
    const arrPokemonById = pokemonsDetails.filter((e: any) => {
      if (e.id === Number(id)) {
         getDescriptionPokemon(e.id);
        return e;
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
      setColor(data.color)
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
      {pokemonById.map((poke: DetailDTO) => {
        return (
          <ColorDetail type={poke.types[0].type.name} key={poke.id}>
            <TitleDetail>
              <LinkArrow to="/">
                <FaArrowLeft />
              </LinkArrow>
              <PokemonNameH1>{poke.name}</PokemonNameH1>
              <p>
                {poke.id < 10
                  ? `#00${poke.id}`
                  : poke.id < 100
                  ? `#0${poke.id}`
                  : `#${poke.id}`}
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
              <DivType type={poke.types[0].type.name}>
                <p>{poke.types[0].type.name}</p>
                <h2>About</h2>
              </DivType>
              <InfoDetailDescript>
                <AllInfoESpan>
                  <InfoESpan>
                    <FaWeight />
                    <p>{(poke.weight*100)/1000} kg</p>
                    <Spans margin="0">Weight</Spans>
                  </InfoESpan>

                  <InfoESpan>
                    <FaRulerVertical />
                    <p>{(poke.height*10)/100} m</p>
                    <Spans margin="0">Height</Spans>
                  </InfoESpan>

                  <InfoESpanSemBorda>
                    {poke.abilities.map((ability: any) => {
                      return <PMoves>{ability.ability.name}</PMoves>;
                    })}
                    <Spans margin="23px">Moves</Spans>
                  </InfoESpanSemBorda>
                </AllInfoESpan>
                <div>
                  <p>{description}</p>
                </div>
              </InfoDetailDescript>
              <DivType type={poke.types[0].type.name}>
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
                  {poke.stats.map((e: any, index: number) => {
                    return <p key={index}>{e.base_stat}</p>;
                  })}
                </div>
                <InfoBarraHorizontal>
                  {poke.stats.map((e: any, index: number) => {
                    return (
                      <DivProgressStats key={index}
                        percent={`${e.base_stat}`} color={color.name}
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
