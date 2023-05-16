import { Container, Picture, Include} from "./styles";

import {FiHeart} from 'react-icons/fi'
import {Button} from "../../components/Button"
import {FiMinus,FiPlus} from 'react-icons/fi'

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

      <Include>
        <div>
          <FiMinus/>
          <label>01</label>
          <FiPlus/>
        </div>

        <Button title="Incluir"/>
      </Include>

    </Container>
  )
}
