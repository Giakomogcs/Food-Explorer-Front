import { Container,Form} from "./styles"

import {Input} from "../../components/SearchBar"
import {Button} from "../../components/Button"


export function SignUp(){
  return(
    <Container>
      <div>
        <img src="public\images\Logo_user.svg" alt="Logo header" />
      </div>

      <Form>

        <h1>Crie sua conta</h1>
        
        <label htmlFor="Nome">
          <p>Seu Nome</p>
          <Input
            placeholder="Exemplo: Giovani Costa Silva"
            type="text"
            id="Nome"
          />
        </label>


      
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
        

        <Button title="Criar conta"/>
        
        <a href="#">Já tenho uma conta</a>
      </Form>
      
    </Container>
  )
}