import { Container, Picture, Include} from "./styles";

import {Button} from "../../components/Button"
import {FiMinus,FiPlus} from 'react-icons/fi'

import { useNavigate } from "react-router-dom"


export function Prato({title, description, price, icon: Icon, id}){

  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  function handleEdit(id){
    navigate(`/edit/${id}`)
  }

  return(
    <Container>
      <div className="Icon" onClick={() => handleEdit(id)}>
        {Icon && <Icon size={24}/>}
      </div>

      <div className="body" onClick={() => handleDetails(id)}>
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
      </div>


    </Container>
  )
}
