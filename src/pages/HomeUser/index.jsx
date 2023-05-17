import { Container, Content, Pratos, Picture} from "./styles"

import { HeaderUser } from "../../components/HeaderUser"
import {ImagemHome} from "../../components/ImagemHome"
import {Carrossel} from "../../components/Carrossel"
import {PratoUser} from "../../components/PratoUser"

import { Footer } from "../../components/Footer"

export function HomeUser(){
  return(
    <Container>
      <header>
        <HeaderUser/>
      </header>

      <Content>
        <ImagemHome/>

        <Carrossel title="Refeições">
          <Pratos>

            <PratoUser title="Salada >" price="R$ 49,97"/>
            <PratoUser title="Tomate >" price="R$ 39,97" />
            <PratoUser title="Cenoura >" price="R$ 9,97" />

          </Pratos>
        </Carrossel>

        <Carrossel title="Pratos principais">
          <Pratos>

            <PratoUser title="Salada >" price="R$ 49,97"/>
            <PratoUser title="Tomate >" price="R$ 39,97" />
            <PratoUser title="Cenoura >" price="R$ 9,97" />

          </Pratos>
        </Carrossel>

        <Carrossel title="Bebidas">
          <Pratos>

            <PratoUser title="Salada >" price="R$ 49,97"/>
            <PratoUser title="Tomate >" price="R$ 39,97" />
            <PratoUser title="Cenoura >" price="R$ 9,97" />

          </Pratos>
        </Carrossel>

      </Content>

      <footer>
        <Footer/>
      </footer>
    </Container>
  )
}
