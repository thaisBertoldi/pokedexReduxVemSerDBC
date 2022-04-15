import styled, { css } from "styled-components";

export const ColorPokemon = styled.div<{ type: any }>`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
  align-items: center;

  ${(props: any) => {
    switch (props.type) {
      case "grass":
        return css`
            border: 4px solid #7AC74C;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #7AC74C;
              }}
            break;
            `;
      case "fire":
        return css`
        border: 4px solid #EE8130;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #EE8130;
                break-inside;
            }}`;
      case "water":
        return css`
        border: 4px solid #6390F0;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #6390F0;
                break-inside;
            }}`;
      case "bug":
        return css`
        border: 4px solid #A6B91A;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #A6B91A;
                break-inside;
            }}`;
      case "normal":
        return css`
        border: 4px solid #A8A77A;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #A8A77A;
                break-inside;
            }}`;
      case "poison":
        return css`
        border: 4px solid #A33EA1;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #A33EA1;
                break-inside;
            }}`;
      case "electric":
        return css`
        border: 4px solid #F7D02C;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #F7D02C;
                break-inside;
            }}`;
      case "ground":
        return css`
        border: 4px solid #E2BF65;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #E2BF65;
                break-inside;
            }}`;
      case "fairy":
        return css`
        border: 4px solid #D685AD;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #D685AD;
                break-inside;
            }}`;
      case "fighting":
        return css`
        border: 4px solid #C22E28;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #C22E28;
                break-inside;
            }}`;
      case "psychic":
        return css`
        border: 4px solid #C22E28;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #C22E28;
                break-inside;
            }}`;
      case "rock":
        return css`
        border: 4px solid #C22E28;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #C22E28;
                break-inside;
            }}`;
      case "ghost":
        return css`
        border: 4px solid #735797;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #735797;
                break-inside;
            }}`;
      case "ice":
        return css`
        border: 4px solid #96D9D6;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #96D9D6;
                break-inside;
            }}`;
      case "dragon":
        return css`
        border: 4px solid #6F35FC;
            border-radius: 8px;
            > * {
              &:last-child {
                background-color: #6F35FC;
                break-inside;
            }}`;

      default:
        return css`
        border: 4px solid white;
            border-radius: 8px;
            > * {
              &:last-child {
          background-color: white;
        }}
        `;
    }
  }}
`;

export const ImgHome = styled.img`
  width: 300px;
`;

export const NamePokemon = styled.div`
  color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
`