import { Container, Picture, Include} from "./styles";

import {FiHeart} from 'react-icons/fi'
import {Button} from "../../components/Button"
import {FiMinus,FiPlus} from 'react-icons/fi'

export function Prato({title, description, price, icon: Icon}){
  return(
    <Container>

      {Icon && <Icon size={24}/>}
      <Picture>
        <img 
          src="https://github.com/giakomogcs.png" 
          alt="Foto do Prato" 
        />
      </Picture>

      <p className="title">
        {title}
      </p>

      <p className="description">
        {description}
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
