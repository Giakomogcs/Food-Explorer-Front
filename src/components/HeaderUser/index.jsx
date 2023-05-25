import { Container, Menu, Logo, Receipt, Content  } from "./styles";

import {Input} from "../../components/SearchBar"

import {RxExit} from'react-icons/rx'
import {FiSearch} from 'react-icons/fi'

export function HeaderUser(){
  return(
    <Container>
      <Content className="Content">

        <Menu>
          <div className="Menu">
              <img src="public\images\Menu.svg" alt="icon Menu"/>
          </div>
        </Menu>

        <Logo>
          <div className="Logo">
            <img 
              src="public\images\Logo_user.svg" alt="Logo para usuários" 
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
            <img src="public\images\Receipt.svg" alt="icon de receitas" />
            <p>Pedidos (0)</p>
            <span>1</span>
          </div>
        </Receipt>

        <RxExit/>
      </Content>

    </Container>
  )
}