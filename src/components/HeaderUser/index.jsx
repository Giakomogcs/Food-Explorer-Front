import { Container, Menu, Logo, Receipt, Content  } from "./styles";

import {AiOutlineMenu} from'react-icons/ai'

export function HeaderUser(){
  return(
    <Container>
      <Content className="Content">

        <Menu>
          <div className="Menu">
            <img 
              src="public\images\Menu.svg" alt="icon Menu" 
            />
          </div>
        </Menu>

        <Logo>
          <img 
            id="Logo"
            src="public\images\Logo_user.svg" alt="Logo para usuários" 
          />
        </Logo>

        <Receipt>
          <div className="Receipt">
            <img src="public\images\Receipt.svg" alt="icon de receitas" />
            <span>1</span>
          </div>
        </Receipt>
      </Content>

    </Container>
  )
}