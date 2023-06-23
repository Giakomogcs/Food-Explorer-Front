import { useContext, createContext, useState, useEffect } from "react";
import {api} from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})

  function signOut(){
    localStorage.removeItem("@food-explorer:user")
    localStorage.removeItem("@food-explorer:token")

    setData({})
  }

  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions",{email, password})
      const {user, token, isAdmin} = response.data

      localStorage.setItem("@food-explorer:user", JSON.stringify(user))
      localStorage.setItem("@food-explorer:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({user, token, isAdmin})

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  async function updateProfile({prato}, id){
    
    try {
      console.log(prato)
      await api.put(`/pratos/${id}`, prato)
      
      alert("Prato atualizado!")

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar prato")
      }
    }

  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user")
    const token = localStorage.getItem("@food-explorer:token")

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{
      signIn, 
      signOut,
      updateProfile,
      
      user: data.user
      }}
      >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth};