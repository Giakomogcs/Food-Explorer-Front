import { Container,Form} from "./styles"

import {Input} from "../../components/SearchBar"
import {Button} from "../../components/Button"


export function SignIn(){
  return(
    <Container>
      <div>
        <img src="public\images\Logo_user.svg" alt="Logo header" />
      </div>

      <Form>
        <h1>Faça login</h1>
        
        <label htmlFor="Email">
          <p>E-mail</p>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            id="Email"
          />
        </label>

        <label htmlFor="Password">
          <p>Password</p>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            id="Password"
          />
        </label>

        <Button title="Entrar"/>
        
        <a href="#">Criar uma conta</a>
      </Form>
      
    </Container>
  )
}