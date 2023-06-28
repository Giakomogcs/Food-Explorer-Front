import { Container, Menu, Logo, Receipt, Content  } from "./styles";

import {Input} from "../../components/SearchBar"
import { useAuth } from "../../hooks/auth";

import {RxExit} from'react-icons/rx'
import {FiSearch} from 'react-icons/fi'

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export function HeaderUser(){
  const searchStorage = localStorage.getItem("@food-explorer:search")
  const [searchAdmin, setSearch] = useState(searchStorage)

  const {signOut} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const search = String(searchStorage)
    localStorage.setItem("@food-explorer:search", searchAdmin)
    //console.log(search)
  }, [searchAdmin])
  
  return(
    <Container>
      <Content className="Content">

        <Menu to="/menu">
          <div className="Menu">
              <img src="../../../public/images/Menu.svg" alt="icon Menu"/>
          </div>
        </Menu>

        <Logo>
          <div className="Logo">
            <img 
              src="../../../public/images/Logo_user.svg" alt="Logo para usuários" 
            />
          </div>
        </Logo>


        <div className="Search">
          <Input
            placeholder = "Busque por pratos ou ingredientes" 
            icon={FiSearch}
            onChange ={(e) => setSearch(e.target.value)}
          />
        </div>

        <Receipt>
          <div className="Receipt">
            <img src="../../../public/images/Receipt.svg" alt="icon de receitas" />
            <p>Pedidos (0)</p>
            <span>0</span>
          </div>
        </Receipt>

        <RxExit onClick = {()=> {
          navigate("/")
          signOut()
          }}/>
      </Content>

    </Container>
  )
}