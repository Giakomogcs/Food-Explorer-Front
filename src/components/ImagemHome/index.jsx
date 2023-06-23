import { Container } from "./styles";

import {TfiClose} from'react-icons/tfi'

export function ImagemHome(){
  return(
    <Container>
      <div className="img">
        <img src="images\Homedesktop.svg" alt="Foto de introdução a página" />
      </div>
      <div className="text">
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>

    </Container>
  )
}