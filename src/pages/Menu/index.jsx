import { Container} from "./styles"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Session } from "../../components/Session"

export function Menu(){
  return(
    <Container>
      <Header/>

      <div>
        <Session title="Sair"/>
      </div>


      
    </Container>
  )
}