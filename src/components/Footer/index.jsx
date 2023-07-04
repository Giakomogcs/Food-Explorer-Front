import { Container} from "./styles";
import footerimg from "../../../public/images/imgFooter.svg"

export function Footer(){
  return(
    <Container>
      <div>
        <img src={footerimg} alt="Imagem do footer" />

        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}