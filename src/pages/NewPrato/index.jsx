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

  const [picture, setPicture] = useState(null)
  const [pictureFile, setPictureFile] = useState(null)

  const navigate = useNavigate()
  
  localStorage.setItem("@food-explorer:search", "")

  function handleAddIngrediente(){
    if (newIngrediente.length == 0){
      return alert("O Campo de ingrediente não pode estar vazio.")
    }
    setIngredientes(prevState => [...prevState, newIngrediente])
    setNewIngrediente("")
  }

  function handleRemoveIngrediente(deleted){
    setIngredientes(prevState => prevState.filter(ingrediente => ingrediente !== deleted))
  }

  async function handleNewPrato() {
    if(!name || category == "" || !price || !description){
        return alert("Preencha todos os campos.")
      }
      
    if(newIngrediente){
      return alert("O campo de igredientes tem conteúdo a ser adicionado. Clique em adicionar ou esvazie o campo")
    }
    
    try{
      
      const prato_id = await api.post("/pratos", {
        name,
        category,
        price,
        description,
        Ingredients
      })
      
      updatePicture(prato_id.data.id)

      await api.put(`/pratos/${prato_id.data.id}`, {Ingredients:Ingredients, picture:picture})

      alert("Prato criado com sucesso!")

    }catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível adicionar a imagem")
      }
    }

    navigate("/")
  }
  
  async function updatePicture(prato_id){
    try {
      if(pictureFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", pictureFile)

        const response = await api.patch(`/pratos/picture/${prato_id}`,fileUploadForm)
        setPicture(response.data.picture)

      }

    } catch (error) {
      if(error.response){
        return alert(error.response.data.message)
      } else {
        return alert("Não foi possível adicionar a imagem")
      }
    }
  }

  function handleChangePicture(event) {
    const file = event.target.files[0]
    setPictureFile(file)

    const imagePreview = URL.createObjectURL(file)
    setPicture(imagePreview)
  }


  return(
    <Container>
      <HeaderAdmin/>

      <Content>
        <Link to={-1} className="Voltar">
          <img className="Smaller" src="images/smaller.svg" alt="icone de voltar página"/>
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
                onChange={handleChangePicture}
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
              <option value=""></option>
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
                    onClick={()=> {handleRemoveIngrediente(ingrediente)}}
                  />
                ))
              }
              
              <TagsAdmin 
                placeholder="Adicionar" 
                value={newIngrediente}
                onChange={e => setNewIngrediente(e.target.value)}
                onClick={handleAddIngrediente}
                isNew
              />
            </div>
          </Session>

          <label htmlFor="Price">
            <p id="Price">Preço</p>
            <input
              placeholder="R$ 00,00"
              type="text"
              onChange={e => {
                if(!isNaN(e.target.value)){
                  setPrice(e.target.value)
                } else{
                  alert("siga o exemplo a seguir: 21.12")
                  e.target.value = ""
                }
              }}
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