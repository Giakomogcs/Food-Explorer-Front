import { Container} from "./styles"

import {FiSearch} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderMenu } from "../../components/HeaderMenu"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {Input} from "../../components/SearchBar"

import { useAuth } from "../../hooks/auth";
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";


export function MenuAdmin(){
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


      <div>
        <Input 
          placeholder = "Busque por pratos ou ingredientes" 
          icon={FiSearch}
          onChange ={(e) => setSearch(e.target.value)}
        />
        
        <Link to="/new">
          <Session title="Novo prato"/>
        </Link>

        <Link to="/" onClick = {signOut}>
          <Session title="Sair"/>
        </Link>
      </div>

      <Footer/>
      
    </Container>
  )
}