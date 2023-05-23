import styled from "styled-components";

export const Container = styled.div`
  height: 32px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%; 
  
  display: flex;
  align-items: center;
  justify-content: center;

  align-items: center;
  padding: 8px 16px;

  background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 8px;
  

  >button{
    border: none;
    background: none;
    >svg{
      margin-top:3px;
      color: ${({ theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }
  }

  >input{
    width: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    border: none;
    background: none;

    color: ${({ theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    &::placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }

  
`;