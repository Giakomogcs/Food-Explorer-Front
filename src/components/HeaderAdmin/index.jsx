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
          <img className="Logo"
            src="public\images\Logo_user.svg" alt="Logo para usuários" 
          />
          
          <img 
            src="public\images\admin.svg" alt="icon Menu" 
          />
        </Logo>

      </Content>

    </Container>
  )
}