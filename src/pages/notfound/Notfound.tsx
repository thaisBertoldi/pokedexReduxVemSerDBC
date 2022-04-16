import image from "../../images/image-notfound2.gif";
import {
  Button,
  ContainerNotFound,
  ImgNotFound,
  TitleNotFound,
} from "./NotFound.styles";

function NotFound() {
  return (
    <ContainerNotFound>
      <TitleNotFound>
        <h2>Sinto muito, mas não há pokemons por aqui.</h2>
      </TitleNotFound>
      <Button as="a" href="/">
        Home
      </Button>
      <ImgNotFound src={image} width="900px" alt="Pikachu triste" />
    </ContainerNotFound>
  );
}

export default NotFound;
