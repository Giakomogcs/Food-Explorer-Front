import { Container, Content, Pratos, FooterHome} from "./styles"

import { HeaderUser } from "../../components/HeaderUser"
import {ImagemHome} from "../../components/ImagemHome"
import {Carrossel} from "../../components/Carrossel"

import { Footer } from "../../components/Footer"


export function HomeUser(){
  return(
    <Container>
      <HeaderUser/>

      <Content>
        <ImagemHome/>

        <Carrossel title="Refeições">
          <Pratos>
            <li>Prato1</li>
            <li>Prato2</li>
            <li>Prato2</li>
            <li>Prato2</li>
            <li>Prato2</li>
          </Pratos>
        </Carrossel>

        <Carrossel title="Refeições">
          <Pratos>
            <li>Prato1</li>
            <li>Prato2</li>
            <li>Prato2</li>
            <li>Prato2</li>
            <li>Prato2</li>
          </Pratos>
        </Carrossel>

        <Carrossel title="Refeições">
          <Pratos>
            <li>Prato1</li>
            <li>Prato2</li>
            <li>Prato2</li>
            <li>Prato2</li>
            <li>Prato2</li>
          </Pratos>
        </Carrossel>

      </Content>

      <FooterHome>
        <Footer/>
      </FooterHome>
    </Container>
  )
}