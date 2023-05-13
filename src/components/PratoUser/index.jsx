import { Container, Picture} from "./styles";

import {FiHeart} from 'react-icons/fi'

export function PratoUser({title, price}){
  return(
    <Container>

      <FiHeart/>
      <Picture>
        <img 
          src="https://github.com/giakomogcs.png" 
          alt="Foto do Prato" 
        />
      </Picture>

      <p className="title">
        {title}
      </p>

      <p className="price">
        {price}
      </p>

    </Container>
  )
}