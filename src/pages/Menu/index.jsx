import { Container} from "./styles"

import { Button } from "../../components/Button"
import { HeaderUser } from "../../components/HeaderUser"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"

export function Menu(){
  return(
    <Container>
      <HeaderUser/>

      <div>
        <Session title="Sair"/>
      </div>

      <Footer/>
      
    </Container>
  )
}