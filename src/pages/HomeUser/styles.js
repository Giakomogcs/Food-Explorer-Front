import styled from 'styled-components'

export const Container = styled.div`

  overflow: hidden;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 144px auto 77px;

  grid-template-areas: 
  "header"
  "content"
  "footer";

`;

export const Content = styled.div`
  
  grid-area: content;

  height: 100%;
  min-width: 320px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

`;


export const Pratos = styled.ul`
  list-style: none;
  width: 100%;

  overflow-x: auto;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  gap: 12px;

  >li{
    min-width: 210px;
    min-height: 292px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    background-color: ${({theme}) => theme.COLORS.DARK_300};
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    >p{
      font-size: 14px;
      line-height: 24px;
      text-align: center;
    }
  }
`;

export const FooterHome = styled.footer`
  grid-area: footer;
`;