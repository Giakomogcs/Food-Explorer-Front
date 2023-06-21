import { Container, Content, Pratos, Picture} from "./styles"
import { api } from "../../services/api"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import {ImagemHome} from "../../components/ImagemHome"
import {Carrossel} from "../../components/Carrossel"
import {Prato} from "../../components/Prato"
import { Footer } from "../../components/Footer"

import { useState, useEffect } from "react"
import {BsPencil} from 'react-icons/bs'

export function HomeAdmin(){
  const [pratos, setPratos] = useState([])
  
  const [refeicao, setRefeicao] = useState([])
  const [pratosPrincipais, setPratosPrincipais] = useState([])
  const [sobremesas, setSobremesas] = useState([])
  const [bebidas, setBebidas] = useState([])

  const RefeicaoStorage = localStorage.getItem("@food-explorer:refeicao", JSON.stringify(refeicao))
  const PratosPrincipaisStorage = localStorage.getItem("@food-explorer:pratos-principais", JSON.stringify(pratosPrincipais))
  const SobremesaStorage = localStorage.getItem("@food-explorer:sobremesas", JSON.stringify(sobremesas))
  const BebidaStorage = localStorage.getItem("@food-explorer:bebidas", JSON.stringify(bebidas))

  async function fetchPratos() {
    const response = await api.get(`http://localhost:3333/pratos?name`)
    setPratos(response.data)
  }
  
  useEffect(() => {
    setRefeicao([])
    setPratosPrincipais([])
    setSobremesas([])
    setBebidas([])

    fetchPratos()
    
    pratos.map(prato => {
  
      if(prato.category === "Refeição"){
        setRefeicao(prevState => [...prevState, prato])
        localStorage.setItem("@food-explorer:refeicao", JSON.stringify(refeicao))
      }
  
      if(prato.category === "Pratos principais"){
        setPratosPrincipais(prevState => [...prevState, prato])
        localStorage.setItem("@food-explorer:pratos-principais", JSON.stringify(pratosPrincipais))
      }
      
      if(prato.category === "Sobremesas"){
        setSobremesas(prevState => [...prevState, prato])
        localStorage.setItem("@food-explorer:sobremesas", JSON.stringify(sobremesas))
      }
      
      if(prato.category === "Bebidas"){
        setBebidas(prevState => [...prevState, prato])
        localStorage.setItem("@food-explorer:bebidas", JSON.stringify(bebidas))
      }
    })

  }, [pratos])
  
  return(
    <Container onload={fetchPratos}>
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
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + (parseFloat(prato.price)).toFixed(2)} 
                  icon={BsPencil}/>
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
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + (parseFloat(prato.price)).toFixed(2)} 
                  icon={BsPencil}/>
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
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + (parseFloat(prato.price)).toFixed(2)} 
                  icon={BsPencil}/>
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
                  title={prato.name + " >"}
                  description={prato.description}
                  price={"R$ " + (parseFloat(prato.price)).toFixed(2)} 
                  icon={BsPencil}/>
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
