import { Container} from "./styles"

import {FiSearch} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderMenu } from "../../components/HeaderMenu"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {Input} from "../../components/SearchBar"

import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export function MenuUser(){
  const {signOut} = useAuth()

  const searchStorage = localStorage.getItem("@food-explorer:search")
  const [searchAdmin, setSearch] = useState(searchStorage)

  useEffect(() => {
    const search = String(searchAdmin)

    localStorage.setItem("@food-explorer:search", search)
    //console.log(search)
  }, [searchAdmin])
  
  return(
    <Container>
      <HeaderMenu/>


      <form>
        <Input 
          placeholder = "Busque por pratos ou ingredientes" 
          icon={FiSearch}
          onChange ={(e) => setSearch(e.target.value)}
        />

        <Link to="/" onClick = {signOut}>
          <Session title="Sair"/>
        </Link>
      </form>

      <Footer/>
      
    </Container>
  )
}