import { Container, Content, Details} from "./styles"

import {FiMinus,FiPlus} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderUser } from "../../components/HeaderUser"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function DetailsUser(){
  const navigate = useNavigate()
  const params = useParams()

  const[Ingredients, setIngredientes] = useState([])
  const PratoStorage = JSON.parse(localStorage.getItem("@food-explorer:Edit"))
  localStorage.setItem("@food-explorer:search", "")

  function catchIngredients(data){
    let hist = []
    
    data.Ingredients.map((ingrediente, index) => {
      if(!hist.includes(ingrediente)){
        setIngredientes(hist)
      }
      hist.push(ingrediente.name)
    })
  }

  useEffect(() => {
    async function searchPrato(){
      const response = await api.get(`http://localhost:3333/pratos/${params.prato_id}`)

      localStorage.setItem("@food-explorer:Edit", JSON.stringify(response.data))
      catchIngredients(response.data)
    }
    
    searchPrato()
  },[])

  return(
    <Container>
      <HeaderUser/>

      <Content>

        <Link to="/" >
          <button className="Voltar">
            <img className="Smaller" src="../../../public/images/smaller.svg" alt="icone de voltar página"/>
            voltar
          </button>
        </Link>

        <Details>
          <img className="Prato"
            src={ PratoStorage.picture ? `${api.defaults.baseURL}/files/${PratoStorage.picture}` : PicturePlaceholder
          } 
            alt="Foto do Prato" 
          />

          <div className="Content">
            <h2>{PratoStorage.name}</h2>

            <p>
              {PratoStorage.description}
            </p>

            <Session>
            {
                Ingredients.map((ingrediente, index) => (
                  <TagPratoPage 
                    key={String(index)}
                    title={ingrediente}
                  />
                ))
              }
            </Session>

            <Button 
            className="Insert" 
            title="Editar prato" 
            onClick={() => {navigate(`/edit/${params.prato_id}`)}}
            />
          </div>
        </Details>


        
      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}