import { Container, Content, Picture} from "./styles"

import {FiMinus,FiPlus,FiUpload} from 'react-icons/fi'

import { Button } from "../../components/Button"
import {Input} from "../../components/SearchBar"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagsAdmin} from "../../components/TagsAdmin"

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

        <div className="Principal">
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

          <label htmlFor="Nome" className="Nome">
            <p>Nome</p>
            <input
              placeholder="Exemplo: Salada Ceasar"
              type="text"
              id="Nome"
            />
          </label>

          <label htmlFor="Categoria" className="Categoria">
            <p>Categoria</p>

            <select>
              <option value="Refeição">Refeição</option>
              <option value="Refeição">Pratos principais</option>
              <option value="Refeição">Sobremesas</option>
              <option value="Refeição">Bebidas</option>
            </select>
          </label>

        </div>

        <div className="Segundo">
          <Session title={"Igredientes"}>
            <div className="tags">
              <TagsAdmin className="igredientes" placeholder="Adicionar" title="Igredientes" value="Giovani"/>
              <TagsAdmin className="igredientes" placeholder="Adicionar" title="Igredientes" isNew/>
            </div>
          </Session>

          <label htmlFor="Price">
            <p id="Price">Preço</p>
            <input
              placeholder="R$ 00,00"
              type="text"
            />
          </label>
        </div>

        <div className="Terceiro">
          <label htmlFor="Description" className="Description">
            <p>Descrição</p>
            <textarea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              type="text"
              id="Description"
            />
          </label>
        </div>

        <Button className="SaveButton" title="Salvar Alterações" />

      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}