import { Container, Content} from "./styles"

import {TbMathLower} from 'react-icons/tb'

import { Button } from "../../components/Button"
import { HeaderUser } from "../../components/HeaderUser"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

export function PratoPageUser(){
  return(
    <Container>
      <HeaderUser/>

      <Content>

        <button>
          <TbMathLower/>
          voltar
        </button>
        
        <Session>
          <TagPratoPage title="Sopa"/>
        </Session>

      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}