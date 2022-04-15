import styled, { css } from "styled-components";

export const ColorPokemon = styled.div<{type:any}>`
    width: 1000px;
    height: 700px;
    border: 1px solid red;

  ${(props: any) => {
    switch (props.type) {
      case "grass":
        return css`
            background-color: green;
            break;
            `;
      case "fire":
        return css`
                background-color: red;
                break-inside;
            `;
      case "water":
        return css`
                background-color: blue;
                break-inside;
            `;
      case "bug":
        return css`
                background-color: red;
                break-inside;
            `;
      case "normal":
        return css`
                background-color: red;
                break-inside;
            `;
      case "poison":
        return css`
                background-color: red;
                break-inside;
            `;
      case "electric":
        return css`
                background-color: red;
                break-inside;
            `;
      case "ground":
        return css`
                background-color: red;
                break-inside;
            `;
      case "fairy":
        return css`
                background-color: red;
                break-inside;
            `;
      case "fighting":
        return css`
                background-color: red;
                break-inside;
            `;
      case "psychic":
        return css`
                background-color: red;
                break-inside;
            `;
      case "rock":
        return css`
                background-color: red;
                break-inside;
            `;
      case "ghost":
        return css`
                background-color: red;
                break-inside;
            `;
      case "ice":
        return css`
                background-color: red;
                break-inside;
            `;
      case "dragon":
        return css`
                background-color: red;
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
