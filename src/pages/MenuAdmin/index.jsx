import { Container} from "./styles"

import {FiSearch} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderMenu } from "../../components/HeaderMenu"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {Input} from "../../components/SearchBar"
import {Link} from 'react-router-dom'


export function MenuAdmin(){
  return(
    <Container>
      <HeaderMenu/>


      <div>
        <Input placeholder = "Busque por pratos ou ingredientes" icon={FiSearch}/>
        
        <Link to="/new">
          <Session title="Novo prato"/>
        </Link>
        <Session title="Sair"/>
      </div>

      <Footer/>
      
    </Container>
  )
}