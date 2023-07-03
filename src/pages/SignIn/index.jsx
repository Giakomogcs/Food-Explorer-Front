import { useState } from "react"
import { Container,Form} from "./styles"

import {Link} from 'react-router-dom'
import {Input} from "../../components/SearchBar"
import {Button} from "../../components/Button"

import { useAuth } from "../../hooks/auth"


export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()
  localStorage.setItem("@food-explorer:search", JSON.stringify(""))

  function handleSignIn() {
    signIn({email, password})
  }

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
            type="email"
            id="Email"
            onChange= {e => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="Password">
          <p>Password</p>
          <Input
            placeholder="No mínimo 8 caracteres"
            type="password"
            id="Password"
            onChange= {e => setPassword(e.target.value)}

          />
        </label>

        <Button title="Entrar" onClick={handleSignIn} />
        
        <Link to="/register">Criar uma conta</Link>
      </Form>
      
    </Container>
  )
}