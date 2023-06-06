import { Container, Content, Details} from "./styles"

import {FiMinus,FiPlus} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

export function DetailsAdmin(){
  return(
    <Container>
      <HeaderAdmin/>

      <Content>

        <button className="Voltar">
          <img className="Smaller" src="images\smaller.svg" alt="icone de voltar página"/>
          voltar
        </button>

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