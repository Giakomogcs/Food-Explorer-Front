import { Container, Menu, Logo, Content  } from "./styles";

import {Input} from "../../components/SearchBar"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";

import {Link} from 'react-router-dom'

import {RxExit} from'react-icons/rx'
import {FiSearch} from 'react-icons/fi'
import { useState } from "react";


export function HeaderAdmin(){
  const [searchAdmin, setSearch] = useState("")
  
  const {signOut} = useAuth()

  return(
    <Container>
      <Content>

        <div className="Menu">
          <Menu to="/menu">
            <img 
              src="images\Menu.svg" alt="icon Menu" 
            />
          </Menu>
        </div>

        <Logo>
          <img className="Logo"
            src="images\Logo_user.svg" alt="Logo para usuários" 
          />
          
          <img 
            src="images\admin.svg" alt="icon Menu" 
          />
        </Logo>

        <div className="Search">
          <Input
            placeholder = "Busque por pratos ou ingredientes" 
            icon={FiSearch}
            onChange ={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="Buttons">
          <Link to="/new" className="Buttons">
            <Button title="Novo prato" />
          </Link>

          <RxExit onClick = {signOut}/>
        </div>

      </Content>

    </Container>
  )
  
}



