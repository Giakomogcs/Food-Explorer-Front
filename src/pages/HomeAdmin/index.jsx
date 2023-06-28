import { Container, Content, Pratos, Picture} from "./styles"
import { api } from "../../services/api"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import {ImagemHome} from "../../components/ImagemHome"
import {Carrossel} from "../../components/Carrossel"
import {Prato} from "../../components/Prato"
import { Footer } from "../../components/Footer"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {BsPencil} from 'react-icons/bs'

export function HomeAdmin(){
  const [pratos, setPratos] = useState([])
  
  const [refeicao, setRefeicao] = useState([])
  const [pratosPrincipais, setPratosPrincipais] = useState([])
  const [sobremesas, setSobremesas] = useState([])
  const [bebidas, setBebidas] = useState([])
  

  let RefeicaoStorage = localStorage.getItem("@food-explorer:refeicao", JSON.stringify(refeicao))
  let PratosPrincipaisStorage = localStorage.getItem("@food-explorer:pratos-principais", JSON.stringify(pratosPrincipais))
  let SobremesaStorage = localStorage.getItem("@food-explorer:sobremesas", JSON.stringify(sobremesas))
  let BebidaStorage = localStorage.getItem("@food-explorer:bebidas", JSON.stringify(bebidas))
  let searchStorage = localStorage.getItem("@food-explorer:search", "")

  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }
  
  useEffect(() => {
    setRefeicao([])
    setPratosPrincipais([])
    setSobremesas([])
    setBebidas([])

    async function fechtSearch(){

      const search = searchStorage.replace(/["]/g, '');


      const pathIngredients = `/pratos?Ingredients=${search}`
      const pathName = `/pratos?name=${search}`

      let response = await api.get(pathIngredients)

      if (response.data.length === 0){
        response = await api.get(pathName)
      }
      //console.log(response.data)
      setPratos(response.data)
    }

    fechtSearch()
    
    pratos.map(prato => {
  
      if(prato.category === "Refeição"){
        setRefeicao(prevState => [...prevState, prato])
        RefeicaoStorage = localStorage.getItem("@food-explorer:refeicao", JSON.stringify(refeicao))
      }
  
      if(prato.category === "Pratos principais"){
        setPratosPrincipais(prevState => [...prevState, prato])
        PratosPrincipaisStorage = localStorage.getItem("@food-explorer:pratos-principais", JSON.stringify(pratosPrincipais))
      }
      
      if(prato.category === "Sobremesas"){
        setSobremesas(prevState => [...prevState, prato])
        SobremesaStorage = localStorage.getItem("@food-explorer:sobremesas", JSON.stringify(sobremesas))
      }
      
      if(prato.category === "Bebidas"){
        setBebidas(prevState => [...prevState, prato])
        BebidaStorage = localStorage.getItem("@food-explorer:bebidas", JSON.stringify(bebidas))
      }
      
      localStorage.setItem("@food-explorer:refeicao", JSON.stringify(refeicao))
      localStorage.setItem("@food-explorer:pratos-principais", JSON.stringify(pratosPrincipais))
      localStorage.setItem("@food-explorer:sobremesas", JSON.stringify(sobremesas))
      localStorage.setItem("@food-explorer:bebidas", JSON.stringify(bebidas))
    })

  }, [pratos,searchStorage])

  
  return(
    <Container onload="fechtSearch()">
      <header>
        <HeaderAdmin/>
      </header>

      <Content>
        <ImagemHome/>

        <Carrossel title="Refeições">
          <Pratos>
            {
              JSON.parse(RefeicaoStorage) && JSON.parse(RefeicaoStorage).map(prato => (
                
                <Prato 
                  key={String(prato.id)}
                  id={prato.id}
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + (prato.price)} 
                  icon={BsPencil}
                  image={prato.picture}
                />
              ))
            }

          </Pratos>
        </Carrossel>

        <Carrossel title="Pratos principais">
          <Pratos>
            {
              JSON.parse(PratosPrincipaisStorage) && JSON.parse(PratosPrincipaisStorage).map(prato => (
                
                <Prato 
                  key={String(prato.id)}
                  id={prato.id}
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + prato.price} 
                  icon={BsPencil}
                  image={prato.picture}
                  />
              ))
            }

          </Pratos>
        </Carrossel>

        <Carrossel title="Sobremesas">
          <Pratos>
            {
              JSON.parse(SobremesaStorage) && JSON.parse(SobremesaStorage).map(prato => (
                
                <Prato 
                  key={String(prato.id)}
                  id={prato.id}
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + (prato.price)} 
                  icon={BsPencil}
                  image={prato.picture}
                  />
              ))
            }

          </Pratos>
        </Carrossel>

        <Carrossel title="Bebidas">
          <Pratos>
            {
              JSON.parse(BebidaStorage) && JSON.parse(BebidaStorage).map(prato => (
                
                <Prato 
                  key={String(prato.id)}
                  id={prato.id}
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + (prato.price)} 
                  icon={BsPencil}
                  image={prato.picture}/>
              ))
            }

          </Pratos>
        </Carrossel>

        
      </Content>

      <footer>
        <Footer/>
      </footer>
    </Container>
  )
}
