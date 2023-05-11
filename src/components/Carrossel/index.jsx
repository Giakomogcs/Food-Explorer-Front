import { Container, Card} from "./styles";

import {AiOutlineMenu} from'react-icons/ai'

export function Carrossel({title, children}){
  return(
    <Container>
      <p>{title}</p>
      {children}
    </Container>
  )
}