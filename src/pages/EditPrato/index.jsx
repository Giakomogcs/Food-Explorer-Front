import { Container, Content, Picture} from "./styles"

import {FiUpload} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagsAdmin} from "../../components/TagsAdmin"

import {Link} from 'react-router-dom'
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { useNavigate } from "react-router-dom"
import smaller from "../../../public/images/smaller.svg"

export function EditPrato(){
  
  const params = useParams()
  const {updateProfile} = useAuth()
  const navigate = useNavigate()
  
  const[name, setName] = useState("")
  const[category, setCategory] = useState("")
  const[price, setPrice] = useState("")
  const[description, setDescription] = useState("")
  
  const[Ingredients, setIngredientes] = useState([])
  const[newIngrediente, setNewIngrediente] = useState("")

  const [picture, setPicture] = useState(null)
  const [pictureFile, setPictureFile] = useState(null)
  
  const PratoStorage = JSON.parse(localStorage.getItem("@food-explorer:Edit"))
  localStorage.setItem("@food-explorer:search", "")

  //window.location.reload();
  
  async function handleUpdate(){

    if(newIngrediente){
      return alert("O campo de igredientes tem conteúdo a ser adicionado. Clique em adicionar ou esvazie o campo")
    }
    
    const prato = {
      name,
      category,
      price,
      description,
      Ingredients,
      picture
    }
    
    updateProfile({prato},PratoStorage.id, pictureFile)
    navigate("/")
    setTimeout(100)
    //window.location.reload();
  }
  
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
  
  function handleChangePicture(event) {
    const file = event.target.files[0]
    setPictureFile(file)
    
    const imagePreview = URL.createObjectURL(file)
    setPicture(imagePreview)
  }
  
  function catchIngredients(data){
    let hist = []
    
    data.Ingredients.map((ingrediente, index) => {
      if(!hist.includes(ingrediente)){
        setIngredientes(hist)
      }
      hist.push(ingrediente.name)
    })
  }

  async function removePrato(){
    const confirm = window.confirm("Deseja realmente remover o prato?")

    if(confirm){
      await api.delete(`/pratos/${params.prato_id}`)
      navigate("/")
    }
  }
  
  useEffect(() => {
    async function searchPrato(){
      const response = await api.get(`/pratos/${params.prato_id}`)
      catchIngredients(response.data)

      localStorage.setItem("@food-explorer:Edit", JSON.stringify(response.data))
      
    }
    
    searchPrato()
  },[])

  useEffect(() => {
    setName(PratoStorage.name)
    setCategory(PratoStorage.category)
    setPrice(PratoStorage.price)
    setDescription(PratoStorage.description)
    setPicture(PratoStorage.picture)
  }, [PratoStorage.name])

  return(
    <Container>
      <HeaderAdmin/>

      <Content>
        <Link to={-1} className="Voltar">
          <img className="Smaller" src={smaller} alt="icone de voltar página"/>
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
                onChange={handleChangePicture}
              />
            </label>
          </Picture>

          <label htmlFor="Nome" className="Nome">
            <p>Nome</p>
            <input
              type="text"
              id="Nome"
              placeholder={name}
              onChange={e => {
                setName(e.target.value)}}
            />
          </label>

          <label htmlFor="Categoria" className="Categoria">
            <p>Categoria</p>

            <select onChange={e => setCategory(e.target.value)}>
              <option value="">{category}</option>
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
              type="text"
              placeholder={`R$ ${price}`}
              onChange={e => {
                if(!isNaN(e.target.value)){
                  if (e.target.value === ""){
                    alert("Use ponto, siga o exemplo a seguir: 21.12")
                  }else{
                    setPrice(e.target.value)
                  }
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
              placeholder={description}
              type="text"
              id="Description"
              onChange={e => setDescription(e.target.value)}
            />
          </label>
        </div>

        <div className="Buttons">
          <Button className="DeleteButton" title="Excluir prato" onClick={removePrato}/>
          <Button className="SaveButton" title="Salvar Alterações" onClick={handleUpdate}/>
        </div>

      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}