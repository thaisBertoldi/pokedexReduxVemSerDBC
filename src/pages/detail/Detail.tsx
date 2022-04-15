import { getPokemon } from "../../store/actions/PokemonActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { ImgHome } from "../../AllPages.styles";


function Detail(reducer:any) {
  const { pokemonsToList, dispatch, pokemonsDetails } = reducer;
  const {id} = useParams()
  const [pokemonById, setPokemonById] = useState([])
  console.log(id)

  useEffect(() => {
    if(pokemonsDetails.length === 1){
      getPokemon(pokemonsToList, dispatch);
    }
    getPokemonById()
  }, []);

  const getPokemonById = () => {
    console.log(pokemonsDetails)
    const arrPokemonById = pokemonsDetails.filter((e:any) => {
      if(e.id === Number(id)){
        return e
      }
      return null;
    })
    setPokemonById(arrPokemonById)
  }

  console.log(pokemonById)

  return (
    <>
    <Link to='/'><FaArrowLeft /></Link>
    {pokemonById.map((poke:any) => {
      return (
        <div>
          <div><p>{poke.id < 10 ? `#00${poke.id}` : poke.id < 100 ? `#0${poke.id}` : `#${poke.id}`}</p></div>
          <p>{poke.name}</p>
          <ImgHome
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                alt="Imagem do pokemon"
              />
          <p>{poke.types[0].type.name}</p>
          <h5>About</h5>
          <p>{poke.weight} kg</p>
          <span>Weight</span>
          <p>{poke.height} kg</p>
          <span>Height</span>
          {poke.abilities.map((ability:any) => {
            return (
              <p>{ability.ability.name}</p>
            )
          })}
          <span>Moves</span>
          <p>About provisório: There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
          <h5>Base Stats</h5>
          <p>HP: {poke.stats[0].base_stat}</p>
          <p>ATK: {poke.stats[1].base_stat}</p>
          <p>DEF: {poke.stats[2].base_stat}</p>
          <p>SATK: {poke.stats[3].base_stat}</p>
          <p>SDEF: {poke.stats[4].base_stat}</p>
          <p>SPD: {poke.stats[5].base_stat}</p>
        </div>
      )
    })}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  pokemonsToList: state.pokemonReducer.pokemonsToList,
  pokemonsDetails: state.pokemonReducer.pokemonsDetails,
});

export default connect(mapStateToProps)<any>(Detail);
