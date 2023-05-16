import { Container, Content} from "./styles"

import {TbMathLower} from 'react-icons/tb'

import { Button } from "../../components/Button"
import { HeaderMenu } from "../../components/HeaderMenu"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

export function PratoPageUser(){
  return(
    <Container>
      <HeaderMenu/>

      <Content>

        <button>
          <TbMathLower/>
          voltar
        </button>
        
        <Session>
          <TagPratoPage title="Sopa"/>
        </Session>
      </Content>

      <Footer/>
      
    </Container>
  )
}