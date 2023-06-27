import { Container, Content, Details} from "./styles"

import {FiMinus,FiPlus} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export function DetailsAdmin(){
  const navigate = useNavigate()
  const params = useParams()
  return(
    <Container>
      <HeaderAdmin/>

      <Content>

        <Link to="/" >
          <button className="Voltar">
            <img className="Smaller" src="../../../public/images/smaller.svg" alt="icone de voltar página"/>
            voltar
          </button>
        </Link>

        <Details>
          <img className="Prato"
            src="https://github.com/giakomogcs.png" 
            alt="Foto do Prato" 
          />

          <div className="Content">
            <h2>Salada Ravanello</h2>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <Session>
              <TagPratoPage title="Sodfefgefgpa"/>
              <TagPratoPage title="Sopa"/>
              <TagPratoPage title="Sopa"/>
              <TagPratoPage title="Sopa"/>
              <TagPratoPage title="carai de asa"/>
              <TagPratoPage title="Sopa"/>
              <TagPratoPage title="Sopofofoa"/>
              <TagPratoPage title="Sopa"/>
            </Session>

            <Button className="Insert" title="Editar prato" />
          </div>
        </Details>


        
      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}