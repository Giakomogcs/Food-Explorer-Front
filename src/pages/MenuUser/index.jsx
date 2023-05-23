import { Container} from "./styles"

import {FiSearch} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderMenu } from "../../components/HeaderMenu"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {Input} from "../../components/SearchBar"

export function MenuUser(){
  return(
    <Container>
      <HeaderMenu/>


      <form>
        <Input 
          placeholder = "Busque por pratos ou ingredientes" 
          icon={FiSearch}
        />

          <Session title="Sair"/>
      </form>

      <Footer/>
      
    </Container>
  )
}