import { useContext, createContext, useState, useEffect } from "react";
import {api} from "../services/api"

function PratoProvider(){
  const [pratos, setPratos] = useState([])
  const [refeicao, setRefeicao] = useState([])

  async function fetchPratos(){
    try {
      const response = await api.get(`http://localhost:3333/pratos?name`)
      setPratos(response.data)

      pratos.map(prato => {
        if(prato.category === "Refeição"){
          setRefeicao(prevState => [...prevState, prato])
        }
      })

      localStorage.setItem("@food-explorer:refeicao", JSON.stringify(refeicao))

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível acessar os pratos")
      }
    }
  }
}

export {PratoProvider};