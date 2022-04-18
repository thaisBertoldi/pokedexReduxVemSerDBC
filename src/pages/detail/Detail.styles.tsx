import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleDetail = styled.div`
  align-items: center;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  color: white;
`;

export const ImgDetail = styled.img`
  width: 400px;
  position: absolute;
  &:hover {
    animation: spin 3s linear;

    @keyframes spin {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export const ImgDetailDiv = styled.div`
  display: flex;
  height: 300px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const ImgPokeball = styled.img`
  position: absolute;
  margin-left: 400px;
  width: 300px;
`;

export const ColorDetail = styled.div<{ color: string }>`
  width: 750px;
  padding: 15px;
  border-radius: 12px;
  border: 4px solid white;
  background-color: ${props => props.color};
`;

export const DivType = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 95%;
  color: ${props => props.color};
`;

export const InfoDetailContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
`;

export const InfoDetailDescript = styled.div`
  color: black;
`;

export const InfoDetailText = styled.div`
  color: black;
  display: flex;
  gap: 10px;
  justify-content: center;
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
  justify-content: center;
`;

export const InfoESpan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e0e0e0;
  width: 35%;
  height: 50%;
`;

export const PMoves = styled.p`
  margin: 0;
`;

export const Spans = styled.span<{ margin: string }>`
  margin-top: ${(props) => props.margin};
  opacity: 0.5;
`;

export const InfoESpanSemBorda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 50%;
`;
export const PokeTipo = styled.div<{ color: string }>`
  color: white;
  border-radius: 25px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  text-transform: capitalize;
  background-color: ${props => props.color};
  `;

export const DivProgressStats = styled.div<{
  percent: string | number;
  color: string;
}>`
  background-image: linear-gradient(
    to right,
    ${(props) => props.color} ${(props) => Number(props.percent)}%,
    #c4e7b3a4 10%
  );
  width: 248px;
  height: 10px;
  margin-bottom: 15px;
`;

export const PokemonNameH1 = styled.h1`
  text-transform: capitalize;
`;

export const LinkArrow = styled(Link)`
  color: white;
  font-size: 30px;
`;

