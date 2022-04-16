import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { CgPokemon } from 'react-icons/cg';
import Select from "react-select";

export const FullPageHome = styled.div`
  width:1000px;
  margin: 30px;
  background-color: rgba(247, 247, 247, 1);
  border: 4px solid white;
  padding: 20px;
  border-radius: 12px;`;

export const ContainerPokemon = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
 text-decoration: none;
`

export const PokemonName = styled.p`
  text-transform: capitalize;
`
export const TitleHomeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
`
export const CgPokemonStyled = styled(CgPokemon )`
  font-size: 32px;
  font-weight: 500;
`
export const StyledSelect = styled(Select)`
  text-transform: capitalize;
  width: 950px;
  margin: 20px;
  
`
export const SelectDiv = styled.div`
  display: flex;
  
`