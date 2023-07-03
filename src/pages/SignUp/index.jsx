import {useState} from "react"
import { Container,Form} from "./styles"

import {Input} from "../../components/SearchBar"
import {Button} from "../../components/Button"
import {Link, useNavigate} from 'react-router-dom'

import {api} from "../../services/api"


export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    if(!email.includes("@" && ".")){
      return alert("E-mail inválido")
    }

    if(password.length<8){
      return alert("Senha inválida, é necessário no minimo 8 caracteres")
    }

    api.post("/users", {name, email, password})
    .then(()=> {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível cadastrar")
      }
    })
  }

  return(
    <Container>
      <div>
        <img src="images\Logo_user.svg" alt="Logo header" />
      </div>

      <Form>

        <h1>Crie sua conta</h1>
        
        <label htmlFor="Nome">
          <p>Seu Nome</p>
          <Input
            placeholder="Exemplo: Giovani Costa Silva"
            type="text"
            id="Nome"
            onChange={e => setName(e.target.value)}
          />
        </label>


      
        <label htmlFor="Email">
          <p>E-mail</p>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            id="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
    
       
        <label htmlFor="Password">
          <p>Password</p>
          <Input
            placeholder="No mínimo 8 caracteres"
            type="password"
            id="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        

        <Button title="Criar conta" onClick={handleSignUp}/>
        
        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
      
    </Container>
  )
}