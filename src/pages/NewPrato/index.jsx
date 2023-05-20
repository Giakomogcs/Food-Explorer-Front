import { Container, Content, Picture} from "./styles"

import {FiMinus,FiPlus,FiUpload} from 'react-icons/fi'

import { Button } from "../../components/Button"
import {Input} from "../../components/SearchBar"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

export function NewPrato(){
  return(
    <Container>
      <HeaderAdmin/>

      <Content>
        <button className="Voltar">
          <img className="Smaller" src="public\images\smaller.svg" alt="icone de voltar página"/>
          voltar
        </button>

        <h1>Novo prato</h1>

        <Picture>
          <p>Imagem do prato</p>

          <label htmlFor="picture">
            <FiUpload/>
            <p>Selecione imagem</p>
            <input
              type="file"
              id="picture"
            />
          </label>
        </Picture>

        <label htmlFor="Nome">
          <p>Nome</p>
          <input
            placeholder="Exemplo: Salada Ceasar"
            type="text"
            id="Nome"
          />
        </label>

        <label htmlFor="Categoria">
          <p>Categoria</p>

          <select>
            <option value="Refeição">Refeição</option>
            <option value="Refeição">Pratos principais</option>
            <option value="Refeição">Sobremesas</option>
            <option value="Refeição">Bebidas</option>
          </select>
        </label>

      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}