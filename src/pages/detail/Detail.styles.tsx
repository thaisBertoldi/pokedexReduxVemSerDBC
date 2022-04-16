import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TitleDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: 224px;
  height: 32px;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const ImgDetail = styled.img`
  width: 300px;
  display: flex;
`;

export const ImgPokeball = styled.img`
  position: absolute;
  margin-left: 200px;
  width: 300px;
`;


export const ColorDetail = styled.div<{ type: any }>`
  width: 550px;
  ${(props: any) => {
    switch (props.type) {
      case "grass":
        return css`
                background-color: #7AC74C;
                color: #7AC74C;
            break;
            `;
      case "fire":
        return css`
                background-color: #EE8130;
                color: #EE8130;
                break-inside;
            `;
      case "water":
        return css`
                background-color: #6390F0;
                color: #6390F0;
                break-inside;
            `;
      case "bug":
        return css`

                background-color: #A6B91A;
                color: #A6B91A;
                break-inside;
            `;
      case "normal":
        return css`

                background-color: #A8A77A;
                color: #A8A77A;
                break-inside;
            `;
      case "poison":
        return css`
                background-color: #A33EA1;
                color: #A33EA1;
                break-inside;
            `;
      case "electric":
          return css`
                background-color: #F7D02C;
                color: #F7D02C;
                break-inside;
                `;
      case "ground":
        return css`
                background-color: #E2BF65;
                color: #E2BF65;
                break-inside;
            `;
      case "fairy":
        return css`
                background-color: #D685AD;
                color: #D685AD;
                break-inside;
            `;
      case "fighting":
        return css`
                background-color: #C22E28;
                color: #C22E28;
                break-inside;
            `;
      case "psychic":
        return css`
                background-color: #F95587;
                color: #F95587;
                break-inside;
            `;
      case "rock":
        return css`
                background-color: #B6A136;
                color: #B6A136;
                break-inside;
                `;
      case "ghost":
        return css`
                background-color: #735797;
                color: #735797;
                break-inside;
                `;
      case "ice":
        return css`
                background-color: #96D9D6;
                color: #96D9D6;
                break-inside;
            `;
      case "dragon":
        return css`
                background-color: #6F35FC;
                color: #6F35FC;
                break-inside;
            `;
      default:
        return css`
          background-color: white;
        `;
    }
  }}
`;

export const DivType = styled(ColorDetail)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 500px;
  height: 700px;
`;

export const InfoDetailContainer = styled.div`
  background-color: white;
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
`;

export const InfoDetailDescript = styled.div`
    color: black;
`;

export const InfoDetailText = styled.div`
    color: black;
    display: flex;
    gap: 10px;
`;

export const InfoBarraHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

export const AllInfoESpan = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoESpan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #E0E0E0;
    width: 30%;
`;

export const InfoESpanSemBorda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
`;

export const DivProgressStats = styled.div<{ percent: string | number}>`
    background-image: linear-gradient(to right, #74CB48 ${props => Number(props.percent)}%, #c4e7b3a4 10%);
    width: 248px;
    height: 10px;
    margin-bottom: 15px;
`;

export const LinkArrow = styled(Link)`
  color: white;
  font-size: 30px;
`;
