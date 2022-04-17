import imageError from "../../images/erro.gif";
import { ContainerError } from "./Error.styles";

function Error() {
  return (
    <ContainerError>
      <h2>Oshi, deu erro. Equipe Rocket deve estar por trás disso, certeza!</h2>
      <img src={imageError} alt="Erro ao tentar consultar api." />
    </ContainerError>
  );
}

export default Error;
