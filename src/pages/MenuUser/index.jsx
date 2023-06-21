import { Container} from "./styles"

import {FiSearch} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderMenu } from "../../components/HeaderMenu"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {Input} from "../../components/SearchBar"

import { useAuth } from "../../hooks/auth";
import {Link} from 'react-router-dom'

export function MenuUser(){
  const {signOut} = useAuth()
  
  return(
    <Container>
      <HeaderMenu/>


      <form>
        <Input 
          placeholder = "Busque por pratos ou ingredientes" 
          icon={FiSearch}
        />

        <Link to="/" onClick = {signOut}>
          <Session title="Sair"/>
        </Link>
      </form>

      <Footer/>
      
    </Container>
  )
}