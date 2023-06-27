import { Container, Picture, Include} from "./styles";

import {Button} from "../../components/Button"
import {FiMinus,FiPlus} from 'react-icons/fi'
import PicturePlaceholder from '../../../public/images/PlaceholderImg.jpg'

import { useNavigate } from "react-router-dom"
import { api } from "../../services/api";


export function Prato({title, description, price, icon: Icon, id, image}){
  
  const navigate = useNavigate()
  const PicturePrato = image ? `${api.defaults.baseURL}/files/${image}` : PicturePlaceholder

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

      <div className="body">
        <div className="cardInfo" onClick={() => handleDetails(id)}>
          <Picture>
            <img 
              src={PicturePrato} 
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
        </div>

        <div className="includeSpace">

          <Include>
            <div>
              <FiMinus/>
              <label>01</label>
              <FiPlus/>
            </div>

            <Button title="Incluir"/>
          </Include>
        </div>
      </div>

    </Container>
  )
}
