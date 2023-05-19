import { Container,Form} from "./styles"

import {Input} from "../../components/SearchBar"
import {Button} from "../../components/Button"


export function SignUp(){
  return(
    <Container>
      <header>
        <img src="public\images\Logo_user.svg" alt="Logo header" />
      </header>

      <Form>
      <div>
          <label htmlFor="Nome">
            Seu Nome
          </label>
          <Input
            placeholder="Exemplo: Giovani Costa Silva"
            type="text"
            name="Nome"
          />
        </div>

        <div>
          <label htmlFor="Email">
            E-mail
          </label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            name="Email"
          />
        </div>

        <div>
          <label htmlFor="Password">
            Password
          </label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            name="Password"
          />
        </div>

        <Button title="Criar conta"/>
        
        <a href="#">Já tenho uma conta</a>
      </Form>
      
    </Container>
  )
}