import { Container } from "./styles";

export function Button({img: Img,title, loading = false, ...rest}) {

  return(
    <Container 
      type="button"
      disabled={loading}
      {...rest}
    >
      {Img}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}