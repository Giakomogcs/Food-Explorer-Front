import { Container, Content, Details} from "./styles"

import {TbMathLower} from 'react-icons/tb'

import { Button } from "../../components/Button"
import { HeaderUser } from "../../components/HeaderUser"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

export function DetailsUser(){
  return(
    <Container>
      <HeaderUser/>

      <Content>

        <button className="Voltar">
          <img className="Smaller" src="public\images\smaller.svg" alt="icone de voltar página"/>
          voltar
        </button>

        <Details>
          <img className="Prato"
            src="https://github.com/giakomogcs.png" 
            alt="Foto do Prato" 
          />

          
          
          <Session id="Cards">
            <TagPratoPage title="Sopa"/>
            <TagPratoPage title="Sopa"/>
            <TagPratoPage title="Sopa"/>
          </Session>
        </Details>

        
      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}