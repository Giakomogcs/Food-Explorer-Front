import { Container, Content, Details} from "./styles"

import {FiMinus,FiPlus} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

export function NewPrato(){
  return(
    <Container>
      <HeaderAdmin/>

      <Content>


        
      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}