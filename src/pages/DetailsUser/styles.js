import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  position: relative;

  display: grid;
  grid-template-rows: 144px auto 77px;

  grid-template-areas: 
  "header"
  "content"
  "footer";

  >footer{
    grid-area: footer;
  }

  `;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  padding: 34px 56px;
  
  >button{
    display: flex;
  
    height: 34px;
    width: auto;
    align-items: center;
    justify-content: center;
  
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
  
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  
    border: none;

  }

  
  .Voltar{
    margin-bottom: 16px;

    >.Smaller{
      height: 22px;
      width: 12px;
      margin-right: 11px;
    }
  }
  
  `;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .Prato{
    height: 264px;
    width: 264px;
    border-radius: 50%;
    
    margin-bottom: 16px;
  }
  
  >button{

    display: flex;
    align-items: center;
    justify-content: center;
    
    >h2{
      display: none;
    }
    
    >span {
      margin-right: 24px;
    }
  
    > span:last-child{
      margin-right: 0px;
    }
  }

`;