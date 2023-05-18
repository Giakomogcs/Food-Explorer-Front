import { Container, Content, Pratos, Picture} from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import {ImagemHome} from "../../components/ImagemHome"
import {Carrossel} from "../../components/Carrossel"
import {Prato} from "../../components/Prato"

import { Footer } from "../../components/Footer"

import {BsPencil} from 'react-icons/bs'

export function HomeAdmin(){
  return(
    <Container>
      <header>
        <HeaderAdmin/>
      </header>

      <Content>
        <ImagemHome/>

        <Carrossel title="Refeições">
          <Pratos>

            <Prato title="Salada >" price="R$ 49,97" icon={BsPencil}/>
            <Prato title="Tomate >" price="R$ 39,97" icon={BsPencil}/>
            <Prato title="Cenoura >" price="R$ 9,97" icon={BsPencil}/>
          </Pratos>
        </Carrossel>

        <Carrossel title="Pratos principais">
          <Pratos>

            <Prato title="Salada >" price="R$ 49,97" icon={BsPencil}/>
            <Prato title="Tomate >" price="R$ 39,97" icon={BsPencil}/>
            <Prato title="Cenoura >" price="R$ 9,97" icon={BsPencil}/>

          </Pratos>
        </Carrossel>

        <Carrossel title="Bebidas">
          <Pratos>

            <Prato title="Salada >" price="R$ 49,97" icon={BsPencil}/>
            <Prato title="Tomate >" price="R$ 39,97" icon={BsPencil}/>
            <Prato title="Cenoura >" price="R$ 9,97" icon={BsPencil}/>

          </Pratos>
        </Carrossel>

      </Content>

      <footer>
        <Footer/>
      </footer>
    </Container>
  )
}
