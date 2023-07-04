import { Container, Menu, Logo, Content  } from "./styles";

import {Input} from "../../components/SearchBar"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";

import {Link} from 'react-router-dom'

import {RxExit} from'react-icons/rx'
import {FiSearch} from 'react-icons/fi'
import { useState, useEffect } from "react";

import menu from "../../../public/images/Menu.svg"
import logo_user from "../../../public/images/Logo_user.svg"
import admin_img from "../../../public/images/admin.svg"


export function HeaderAdmin(){
  const searchStorage = localStorage.getItem("@food-explorer:search")
  const [searchAdmin, setSearch] = useState(searchStorage)
  
  const {signOut} = useAuth()
  
  useEffect(() => {
    const search = String(searchStorage)
    localStorage.setItem("@food-explorer:search", searchAdmin)
    //console.log(search)
  }, [searchAdmin])
  
  return(
    <Container>
      <Content>

        <div className="Menu">
          <Menu to="/menu">
            <img 
              src={menu} alt="icon Menu" 
            />
          </Menu>
        </div>

        <Logo>
          <img className="Logo"
            src={logo_user} alt="Logo para usuários" 
          />
          
          <img 
            src={admin_img} alt="icon Menu" 
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

          <Link to="/" className="signOut">
            <RxExit onClick = {signOut}/>
          </Link>
        </div>

      </Content>

    </Container>
  )
  
}



