import styled, { css } from "styled-components";

export const ColorPokemon = styled.div<{ type: any }>`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-between;
  align-items: center;

  ${(props: any) => {
    switch (props.type) {
      case "grass":
        return css`
            border: 4px solid #7AC74C;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#7AC74C; 
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                }

              }
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
              &:first-child{
                color:#EE8130;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #EE8130;
                break-inside;
            }}`;
      case "water":
        return css`
        border: 4px solid #6390F0;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#6390F0;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #6390F0;
                break-inside;
            }}`;
      case "bug":
        return css`
        border: 4px solid #A6B91A;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#A6B91A;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #A6B91A;
                break-inside;
            }}`;
      case "normal":
        return css`
        border: 4px solid #A8A77A;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#A8A77A;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #A8A77A;
                break-inside;
            }}`;
      case "poison":
        return css`
        border: 4px solid #A33EA1;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#A33EA1;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #A33EA1;
                break-inside;
            }}`;
      case "electric":
        return css`
        border: 4px solid #F7D02C;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#F7D02C;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #F7D02C;
                break-inside;
            }}`;
      case "ground":
        return css`
        border: 4px solid #E2BF65;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#E2BF65;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #E2BF65;
                break-inside;
            }}`;
      case "fairy":
        return css`
        border: 4px solid #D685AD;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#D685AD;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #D685AD;
                break-inside;
            }}`;
      case "fighting":
        return css`
        border: 4px solid #C22E28;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#C22E28;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #C22E28;
                break-inside;
            }}`;
      case "psychic":
        return css`
        border: 4px solid #F95587;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#F95587;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #F95587;
                break-inside;
            }}`;
      case "rock":
        return css`
        border: 4px solid #B6A136;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#B6A136;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #B6A136;
                break-inside;
            }}`;
      case "ghost":
        return css`
        border: 4px solid #735797;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#735797;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #735797;
                break-inside;
            }}`;
      case "ice":
        return css`
        border: 4px solid #96D9D6;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#96D9D6;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                } 
              }
              &:last-child {
                background-color: #96D9D6;
                break-inside;
            }}`;
      case "dragon":
        return css`
        border: 4px solid #6F35FC;
            border-radius: 8px;
            > * {
              &:first-child{
                color:#6F35FC;
                > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                }
              }
              &:last-child {
                background-color: #6F35FC;
                break-inside;
            }}`;

      default:
        return css`
          border: 4px solid white;
          border-radius: 8px;
          > * {
            &:first-child {
              color: black;
              > *{
                display: flex;
                justify-content: flex-end;
                width: 280px;
                padding-right: 20px;
                }
            }
            &:last-child {
              background-color: white;
            }
          }
        `;
    }
  }}
`;

export const ImgHome = styled.img`
  width: 200px;
`;

export const NamePokemon = styled.div`
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

export const FullPageHome = styled.div``;

export const ContainerPokemon = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
`;
