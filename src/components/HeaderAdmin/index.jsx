import { Container, Menu, Logo, Receipt, Content  } from "./styles";

import {AiOutlineMenu} from'react-icons/ai'

export function HeaderAdmin(){
  return(
    <Container>
      <Content>

        <Menu>
          <img 
            src="public\images\Menu.svg" alt="icon Menu" 
          />
        </Menu>

        <Logo>
          <img 
            src="public\images\Logo_admin.svg" alt="Logo para usuários" 
          />
        </Logo>

      </Content>

    </Container>
  )
}