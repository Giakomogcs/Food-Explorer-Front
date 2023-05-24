import { Container, Content, Picture} from "./styles"

import {FiMinus,FiPlus,FiUpload} from 'react-icons/fi'

import { Button } from "../../components/Button"
import {Input} from "../../components/SearchBar"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagsAdmin} from "../../components/TagsAdmin"

export function EditPrato(){
  return(
    <Container>
      <HeaderAdmin/>

      <Content>
        <button className="Voltar">
          <img className="Smaller" src="public\images\smaller.svg" alt="icone de voltar página"/>
          voltar
        </button>

        <h1>Editar Prato</h1>

        <Picture>
          <p>Imagem do prato</p>

          <label htmlFor="picture">
            <FiUpload/>
            <p>Selecione imagem para alterá-la</p>
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
            value={"Salada Ceasar"}
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

        <Session title={"Igredientes"}>
          <div className="tags">
            <TagsAdmin className="igredientes" placeholder="Adicionar" title="Igredientes" value="Giovani"/>
            <TagsAdmin className="igredientes" placeholder="Adicionar" title="Igredientes" isNew/>
          </div>
        </Session>

        <label htmlFor="Price">
          <p id="Price">Preço</p>
          <input
            value="R$ 40,00"
            placeholder="R$ 00,00"
            type="text"
            
          />
        </label>

        <label htmlFor="Description">
          <p>Descrição</p>
          <textarea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={"A Salada César é uma opção refrescante para o verão."}
            type="text"
            id="Description"
          />
        </label>

        <div className="Buttons">
          <Button className="DeleteButton" title="Excluir Prato" />
          <Button className="SaveButton" title="Salvar Alterações" />
        </div>

      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}