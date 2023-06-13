import { Container } from "./styles";

import {Link} from 'react-router-dom'
import {TfiClose} from'react-icons/tfi'

export function HeaderMenu(){
  return(
    <Container>
      <Link to={-1} className="svg">
        <TfiClose />
      </Link>

      <p>Menu</p>

    </Container>
  )
}