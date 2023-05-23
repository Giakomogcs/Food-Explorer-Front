import { Container, Content, Details, Include} from "./styles"

import {FiMinus,FiPlus} from 'react-icons/fi'

import { Button } from "../../components/Button"
import { HeaderUser } from "../../components/HeaderUser"
import { Session } from "../../components/Session"
import { Footer } from "../../components/Footer"
import {TagPratoPage} from "../../components/TagPratoPage"

export function DetailsUser(){
  return(
    <Container>
      <HeaderUser/>

      <Content>

        <button className="Voltar">
          <img className="Smaller" src="public\images\smaller.svg" alt="icone de voltar página"/>
          voltar
        </button>

        <Details>
          <img className="Prato"
            src="https://github.com/giakomogcs.png" 
            alt="Foto do Prato" 
          />

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

            <Include>
              <div>
                <FiMinus/>
                <label>01</label>
                <FiPlus/>
              </div>

              <Button className="Insert" title="Incluir" img={<img src="public\images\Receipt.svg" alt="icone de receitas"/>} />
            </Include>

        </Details>


        
      </Content>
      
      <footer>
        <Footer/>
      </footer>
      
    </Container>
  )
}