import { Container} from "./styles"

import {FiSearch} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderUser } from "../../components/HeaderUser"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {Input} from "../../components/SearchBar"

export function Menu(){
  return(
    <Container>
      <HeaderUser/>


      <div>
        <Input placeholder = "Busque por pratos ou ingredientes" icon={FiSearch}/>
        
        <Session title="Sair"/>
      </div>

      <Footer/>
      
    </Container>
  )
}