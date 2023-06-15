import { useContext, createContext, useState, useEffect } from "react";
import {api} from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})


  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions",{email, password})
      const {user, token, isAdmin} = response.data

      localStorage.setItem("@food-explorer:user", JSON.stringify(user))
      localStorage.setItem("@food-explorer:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({user, token, isAdmin})

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user")
    const token = localStorage.getItem("@food-explorer:token")

    if(token && user){
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{signIn, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth};