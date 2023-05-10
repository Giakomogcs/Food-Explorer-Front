import { Container} from "./styles"

import { HeaderUser } from "../../components/HeaderUser"
import {ImagemHome} from "../../components/ImagemHome"

import { Footer } from "../../components/Footer"


export function HomeUser(){
  return(
    <Container>
      <HeaderUser/>

      <ImagemHome/>

      <Footer/>
    </Container>
  )
}