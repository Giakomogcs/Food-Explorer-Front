import { Container} from "./styles"

import { HeaderUser } from "../../components/HeaderUser"

import { Footer } from "../../components/Footer"


export function HomeUser(){
  return(
    <Container>
      <HeaderUser/>

      <Footer/>
    </Container>
  )
}