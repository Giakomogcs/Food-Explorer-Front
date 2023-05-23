import { Container } from "./styles";

export function Session({title, children}){
  return (
    <Container>
      <button>
        {title}
      </button>
      {children}
    </Container>
  )
}