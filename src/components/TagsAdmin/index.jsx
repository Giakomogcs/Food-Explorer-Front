import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function TagsAdmin({isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input
        className="ingredientes"
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>


    </Container>
  )
}