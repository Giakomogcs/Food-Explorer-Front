import { useContext } from "react"
import { Container,Form} from "./styles"

import {Link} from 'react-router-dom'
import {Input} from "../../components/SearchBar"
import {Button} from "../../components/Button"

import { Mycontext } from "../../mycontext"


export function SignIn(){

  const data = useContext(Mycontext)
  console.log(data)
  return(
    <Container>
      <div>
        <img src="images\Logo_user.svg" alt="Logo header" />
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
        
        <Link to="/register">Criar uma conta</Link>
      </Form>
      
    </Container>
  )
}