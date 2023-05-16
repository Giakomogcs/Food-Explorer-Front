import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 144px auto 77px;

  grid-template-areas: 
  "header"
  "content"
  "footer";

  `;

export const Content = styled.div`
  padding: 34px 56px;
  
  >button{
    display: flex;
  
    height: 34px;
    width: auto;
    align-items: start;
  
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
  
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  
    border: none;
    
    >svg{
      font-size: 22px;
    }
  }
`;