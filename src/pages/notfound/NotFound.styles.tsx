import styled from "styled-components";

export const ContainerNotFound = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgNotFound = styled.img`
    position: absolute;
    z-index: -1;
`;

export const TitleNotFound = styled.div`
    background-image: linear-gradient(to bottom, white, #ffffffd3);
    border-radius: 15px;
    margin-top: 150px;
    opacity: 0.9;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  background-color: #3751FF;
  color: #FFFFFF;
`;