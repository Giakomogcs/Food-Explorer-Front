import { Container, Menu, Logo, Content  } from "./styles";

import {Input} from "../../components/SearchBar"
import { Button } from "../../components/Button"

import {RxExit} from'react-icons/rx'
import {FiSearch} from 'react-icons/fi'

export function HeaderAdmin(){
  return(
    <Container>
      <Content>

        <div className="Menu">
          <Menu>
            <img 
              src="public\images\Menu.svg" alt="icon Menu" 
            />
          </Menu>
        </div>

        <Logo>
          <img className="Logo"
            src="public\images\Logo_user.svg" alt="Logo para usuários" 
          />
          
          <img 
            src="public\images\admin.svg" alt="icon Menu" 
          />
        </Logo>

        <div className="Search">
          <Input
            placeholder = "Busque por pratos ou ingredientes" 
            icon={FiSearch}
          />
        </div>

        <div className="Buttons">
          <Button title="Novo prato" />

          <RxExit/>
        </div>

      </Content>

    </Container>
  )
}