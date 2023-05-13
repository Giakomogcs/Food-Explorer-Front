import { Container, Content, Pratos, FooterHome, Picture} from "./styles"

import { HeaderUser } from "../../components/HeaderUser"
import {ImagemHome} from "../../components/ImagemHome"
import {Carrossel} from "../../components/Carrossel"
import {PratoUser} from "../../components/PratoUser"

import { Footer } from "../../components/Footer"

import {FiHeart} from 'react-icons/fi'


export function HomeUser(){
  return(
    <Container>
      <HeaderUser/>

      <Content>
        <ImagemHome/>

        <Carrossel title="Refeições">
          <Pratos>

            <PratoUser title="Salada >" price="49,97" />
            <PratoUser title="Tomate >" price="39,97" />
            <PratoUser title="Cenoura >" price="9,97" />

          </Pratos>
        </Carrossel>

        


      </Content>

      <FooterHome>
        <Footer/>
      </FooterHome>
    </Container>
  )
}
