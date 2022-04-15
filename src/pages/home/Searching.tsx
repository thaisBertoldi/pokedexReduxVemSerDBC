import { getPokemon } from "../../store/actions/PokemonActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { ColorPokemon, ImgHome, NamePokemon, FullPageHome, ContainerPokemon, StyledLink } from "../../AllPages.styles";
import { useNavigate } from "react-router-dom";
import { Component, Fragment } from 'react'
import Select from 'react-select'
import { getValue } from "@testing-library/user-event/dist/utils";


function Searching(reducer: any) {
  const { pokemonsToList, dispatch, pokemonsDetails } = reducer;
  const [ search, setSearch ] = useState({})
  const [ searchedPokemons, setSearchedPokemons ] = useState<any>([])
  const navigate = useNavigate()

  useEffect(() => {
    if(pokemonsToList.length === 1){
    getPokemon(pokemonsToList, dispatch);
    }
  }, []);

  useEffect(() => {
    mapOptions();
  },[pokemonsDetails])

  const findPokemon = () =>{
    console.log(search)
    setSearchedPokemons(pokemonsDetails.filter( (e:any) =>
      e.name.includes(search))
    )
    
  }

   const selectPokemon = () =>{
    const poke = searchedPokemons.find((e:any)=>
      e.name === search
    )
    navigate(`/detail/${poke.id}`)
  }

  const setupNavigate = (poke:any) => {
    console.log(poke.value, 'poke')
    console.log(pokemonsDetails, "details")
    const pokeSelecionado = pokemonsDetails.filter((e:any) => e.name === poke.value)
    console.log(pokeSelecionado[0].id, "selecionado")
    navigate(`/detail/${pokeSelecionado[0].id}`);
  };
  const mapOptions = () =>{
    let newObj:any = [];
    console.log(pokemonsDetails, 'pokeoke')
    const pokeOptions = pokemonsDetails.map((e:any)=>{ 
      return { value: e.name, label: e.name}
      // newObj.push(newPoke)
      // if(searchedPokemons.length === 0){
      //   searchedPokemons.push(newObj)
      // }else{
      //   setSearchedPokemons({...searchedPokemons, newObj})
      // } 
    })
    setSearchedPokemons(pokeOptions)
  }
  console.log(search, "oi2")

  // class SingleSelect extends Component<{}, State>{
  // toggleSearchable = () =>
  //   this.setState((state:any) => ({ isSearchable: !state.isSearchable }));
  // }


  return (
    <FullPageHome>
      <h1>Pokemons</h1>
      
        <Select options={searchedPokemons} onChange={(poke:any)=> setupNavigate(poke)}/>
      
      <ContainerPokemon>
      {pokemonsDetails.map((e: any) => {
        return (
            <ColorPokemon key={e.id} type={e.types[0].type.name}>
              <div><p>{e.id < 10 ? `#00${e.id}` : e.id < 100 ? `#0${e.id}` : `#${e.id}`}</p></div>
              <StyledLink to={`/detail/${e.id}`}><ImgHome
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
                alt="Imagem do pokemon"
              /></StyledLink>
              <StyledLink to={`/detail/${e.id}`}><NamePokemon><p>{e.name}</p></NamePokemon></StyledLink>
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

export default connect(mapStateToProps)<any>(Searching);
