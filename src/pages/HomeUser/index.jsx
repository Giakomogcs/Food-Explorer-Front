import { Container, Content, Pratos, Picture} from "./styles"

import { HeaderUser } from "../../components/HeaderUser"
import {ImagemHome} from "../../components/ImagemHome"
import {Carrossel} from "../../components/Carrossel"
import {Prato} from "../../components/Prato"

import { Footer } from "../../components/Footer"

import {FiHeart} from 'react-icons/fi'

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

            <Prato title="Salada >" description="Massa fresca com camarões e pesto." price="R$ 49,97" icon={FiHeart}/>
            <Prato title="Tomate >" description="Massa fresca com camarões e pesto." price="R$ 39,97" icon={FiHeart}/>
            <Prato title="Cenoura >" description="Massa fresca com camarões e pesto." price="R$ 9,97" icon={FiHeart}/>
            <Prato title="Salada >" description="Massa fresca com camarões e pesto." price="R$ 49,97" icon={FiHeart}/>
            <Prato title="Tomate >" description="Massa fresca com camarões e pesto." price="R$ 39,97" icon={FiHeart}/>
            <Prato title="Cenoura >" description="Massa fresca com camarões e pesto." price="R$ 9,97" icon={FiHeart}/>

          </Pratos>
        </Carrossel>

        <Carrossel title="Pratos principais">
          <Pratos>

            <Prato title="Salada >" description="Massa fresca com camarões e pesto." price="R$ 49,97" icon={FiHeart}/>
            <Prato title="Tomate >" description="Massa fresca com camarões e pesto." price="R$ 39,97" icon={FiHeart}/>
            <Prato title="Cenoura >" description="Massa fresca com camarões e pesto." price="R$ 9,97" icon={FiHeart}/>

          </Pratos>
        </Carrossel>

        <Carrossel title="Bebidas">
          <Pratos>

            <Prato title="Salada >" description="Massa fresca com camarões e pesto." price="R$ 49,97" icon={FiHeart}/>
            <Prato title="Tomate >" description="Massa fresca com camarões e pesto." price="R$ 39,97" icon={FiHeart}/>
            <Prato title="Cenoura >" description="Massa fresca com camarões e pesto." price="R$ 9,97" icon={FiHeart}/>

          </Pratos>
        </Carrossel>

      </Content>

      <footer>
        <Footer/>
      </footer>
    </Container>
  )
}
