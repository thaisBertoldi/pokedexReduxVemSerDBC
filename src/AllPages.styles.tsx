import styled, { css } from "styled-components";

export const ColorPokemon = styled.div<{type:any}>`
    width: 1000px;
    height: 700px;
    border: 1px solid red;

  ${(props: any) => {
    switch (props.type) {
      case "grass":
        return css`
            background-color: #7AC74C;
            break;
            `;
      case "fire":
        return css`
                background-color: #EE8130;
                break-inside;
            `;
      case "water":
        return css`
                background-color: #6390F0;
                break-inside;
            `;
      case "bug":
        return css`
                background-color: #A6B91A;
                break-inside;
            `;
      case "normal":
        return css`
                background-color: #A8A77A;
                break-inside;
            `;
      case "poison":
        return css`
                background-color: #A33EA1;
                break-inside;
            `;
      case "electric":
        return css`
                background-color: #F7D02C;
                break-inside;
            `;
      case "ground":
        return css`
                background-color: #E2BF65;
                break-inside;
            `;
      case "fairy":
        return css`
                background-color: #D685AD;
                break-inside;
            `;
      case "fighting":
        return css`
                background-color: #C22E28;
                break-inside;
            `;
      case "psychic":
        return css`
                background-color: #F95587;
                break-inside;
            `;
      case "rock":
        return css`
                background-color: #B6A136;
                break-inside;
            `;
      case "ghost":
        return css`
                background-color: #735797;
                break-inside;
            `;
      case "ice":
        return css`
                background-color: #96D9D6;
                break-inside;
            `;
      case "dragon":
        return css`
                background-color: #6F35FC;
                break-inside;
            `;

      default:
        return css`
          background-color: white;
        }
        `;
    }
  }}
`;
