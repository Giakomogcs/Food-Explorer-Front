import { Container, Menu, Logo, Receipt, Content  } from "./styles";

import {Input} from "../../components/SearchBar"
import { useAuth } from "../../hooks/auth";

import {RxExit} from'react-icons/rx'
import {FiSearch} from 'react-icons/fi'

import {Link} from 'react-router-dom'

export function HeaderUser(){
  const {signOut} = useAuth()
  
  return(
    <Container>
      <Content className="Content">

        <Menu to="/menu">
          <div className="Menu">
              <img src="images\Menu.svg" alt="icon Menu"/>
          </div>
        </Menu>

        <Logo>
          <div className="Logo">
            <img 
              src="images\Logo_user.svg" alt="Logo para usuários" 
            />
          </div>
        </Logo>


        <div className="Search">
          <Input
            placeholder = "Busque por pratos ou ingredientes" 
            icon={FiSearch}
          />
        </div>

        <Receipt>
          <div className="Receipt">
            <img src="images\Receipt.svg" alt="icon de receitas" />
            <p>Pedidos (0)</p>
            <span>1</span>
          </div>
        </Receipt>

        <RxExit onClick = {signOut}/>
      </Content>

    </Container>
  )
}