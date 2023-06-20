import { Container, Content, Picture} from "./styles"

import {FiMinus,FiPlus,FiUpload} from 'react-icons/fi'

import { Button } from "../../components/Button"
import {Input} from "../../components/SearchBar"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagsAdmin} from "../../components/TagsAdmin"

import {Link} from 'react-router-dom'
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function NewPrato(){

  const[name, setName] = useState("")
  const[category, setCategory] = useState("")
  const[price, setPrice] = useState("")
  const[description, setDescription] = useState("")

  const[Ingredients, setIngredientes] = useState([])
  const[newIngrediente, setNewIngrediente] = useState("")

  const navigate = useNavigate()

  function handleAddIgrediente(){
    if (newIngrediente.length == 0){
      return alert("O Campo de ingrediente não pode estar vazio.")
    }
    setIngredientes(prevState => [...prevState, newIngrediente])
    setNewIngrediente("")
  }

  function handleRemoveIgrediente(deleted){
    setIngredientes(prevState => prevState.filter(ingrediente => ingrediente !== deleted))
  }

  async function handleNewPrato() {
    if(!name || !category || !price || !description){
      return alert("Preencha todos os campos.")
    }

    if(newIngrediente){
      return alert("O campo de igredientes tem conteúdo a ser adicionado. Clique em adicionar ou esvazie o campo")
    }

    await api.post("/pratos", {
      name,
      category,
      price,
      description,
      Ingredients
    })

    alert("Prato criado com sucesso!")
    navigate("/")
  }


  return(
    <Container>
      <HeaderAdmin/>

      <Content>
        <Link to={-1} className="Voltar">
          <img className="Smaller" src="images\smaller.svg" alt="icone de voltar página"/>
          voltar
        </Link>

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
              onChange={e => setName(e.target.value)}
            />
          </label>

          <label htmlFor="Categoria" className="Categoria">
            <p>Categoria</p>

            <select onChange={e => setCategory(e.target.value)}>
              <option value="Refeição">Refeição</option>
              <option value="Pratos principais">Pratos principais</option>
              <option value="Sobremesas">Sobremesas</option>
              <option value="Bebidas">Bebidas</option>
            </select>
          </label>

        </div>

        <div className="Segundo">
          <Session title={"Ingredientes"}>
            <div className="ingredientesList">
              {
                Ingredients.map((ingrediente, index) => (
                  <TagsAdmin 
                    key={String(index)}
                    value={ingrediente}
                    onClick={()=> {handleRemoveIgrediente(ingrediente)}}
                  />
                ))
              }
              
              <TagsAdmin 
                placeholder="Adicionar" 
                value={newIngrediente}
                onChange={e => setNewIngrediente(e.target.value)}
                onClick={handleAddIgrediente}
                isNew
              />
            </div>
          </Session>

          <label htmlFor="Price">
            <p id="Price">Preço</p>
            <input
              placeholder="R$ 00,00"
              type="text"
              onChange={e => setPrice(e.target.value)}
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
              onChange={e => setDescription(e.target.value)}
            />
          </label>
        </div>

        <Button 
          className="SaveButton" 
          title="Salvar Alterações" 
          onClick={handleNewPrato}
        />

      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}