import { Container, Picture, Include} from "./styles";
import {FiHeart} from 'react-icons/fi'
import {BsPencil} from 'react-icons/bs'

import {Button} from "../../components/Button"
import {FiMinus,FiPlus} from 'react-icons/fi'
import PicturePlaceholder from '../../../public/images/PlaceholderImg.jpg'

import { useNavigate } from "react-router-dom"
import { api } from "../../services/api";

import { useState, useEffect } from "react"


export function Prato({title, description, price, icon: Icon, id, image, isUser}){
  
  const navigate = useNavigate()
  const PicturePrato = image ? `${api.defaults.baseURL}/files/${image}` : PicturePlaceholder
  //const [isUser, setIsUser] = useState(false)

  
  const [quantity, setQuantity] = useState(0)
  const [recipes, setRecipes] = useState('')
  
  //const recipeStorage = localStorage.getItem("@food-explorer:recipes")
  
  function handleDetails(id){
    navigate(`/details/${id}`)
  }
  
  function handleIcon(id){
    
    if(Icon == BsPencil){
      navigate(`/edit/${id}`)
    }
    if(Icon == FiHeart){
      //setIsUser(true)
      console.log(isUser)
    }
  }

  function addStore(name){
    if (quantity <= 99) {
      setQuantity(quantity+1)
    }
    catchRecipes(name)
  }

  function deleteStore(name){
    if (quantity > 0) {
      setQuantity(quantity-1)
    }
    catchRecipes(name)
  }

  function catchRecipes(prato) {
    
    setRecipes(prevState => [...prevState, prato])
    console.log(recipes)
    localStorage.setItem("@food-explorer:recipes", JSON.stringify(recipes))
  }

  useEffect(() => {

  }, [title, description, price, Icon, id, image, isUser])

  return(
    <Container isUser={isUser}>
      <div className="Icon" onClick={() => handleIcon(id)}>
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
              <FiMinus onClick={()=>{deleteStore(title)}}/>
              <label>{quantity}</label>
              <FiPlus onClick={()=>{addStore(title)}}/>
            </div>

            <Button title="Incluir"/>
          </Include>
        </div>
      </div>

    </Container>
  )
}
