import { Container, Content, Picture} from "./styles"

import {FiMinus,FiPlus,FiUpload} from 'react-icons/fi'

import { Button } from "../../components/Button"
import {Input} from "../../components/SearchBar"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagsAdmin} from "../../components/TagsAdmin"

import {Link} from 'react-router-dom'
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useEffect, useState } from "react"

export function EditPrato(){
  const params = useParams()
  console.log(params.prato_id)

  const {updateProfile} = useAuth()

  const[oldPrato, setPrato] = useState({})
  const[name, setName] = useState(oldPrato.name)
  const[category, setCategory] = useState(oldPrato.category)
  const[price, setPrice] = useState(oldPrato.price)
  const[description, setDescription] = useState(oldPrato.description)

  const[Ingredients, setIngredientes] = useState(oldPrato.Ingredients)
  const[newIngrediente, setNewIngrediente] = useState("")

  async function handleUpdate(){

    const prato = {
      name,
      category,
      price,
      description,
      Ingredients
    
    }
    updateProfile({prato})
  }

  useEffect(() => {
    async function searchPrato(){

      const response = await api.get(`http://localhost:3333/pratos/${params.prato_id}`)
      console.log(response)
      setPrato(response)
    }

    console.log(" aquiii ")
    searchPrato()

  },[])

  return(
    <Container>
      <HeaderAdmin/>

      <Content>
        <Link to="/" className="Voltar">
          <img className="Smaller" src="../../../public/images/smaller.svg" alt="icone de voltar página"/>
          voltar
        </Link>

        <h1>Editar prato</h1>

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
              value={name}
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
          <Session title={"Ingredientes"}>
            <div className="tags">
              <TagsAdmin className="ingredientes" placeholder="Adicionar" title="Igredientes" value="Giovani"/>
              <TagsAdmin className="ingredientes" placeholder="Adicionar" title="Igredientes" isNew/>
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

        <div className="Buttons">
          <Button className="DeleteButton" title="Excluir prato" />
          <Button className="SaveButton" title="Salvar Alterações" onClick={handleUpdate}/>
        </div>

      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}