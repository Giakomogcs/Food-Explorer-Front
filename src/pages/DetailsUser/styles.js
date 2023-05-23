import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  position: relative;
  overflow-y: auto;

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
  width: auto;
  
  padding: 34px 56px;

  >div{
    >button{
      display: none;
    }
  }

  
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
  font-family: 'Poppins';
  font-style: normal;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .spare{
    height: auto;
    display: flex;
    gap: 40px;
  }
  
  .Prato{
    height: 264px;
    width: 264px;
    border-radius: 50%;
    
    margin-bottom: 16px;
  }

  >h2{
    height: 38px;
    font-weight: 500;
    font-size: 27px;
    line-height: 140%;

    margin-bottom: 24px;
  }

  >p{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    margin-bottom: 24px;
  }

  div{
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 24px;
    
    gap: 24px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    button{
      margin: 0;
      display: none;
    }
    
  }
  

`;

export const Include = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-top: 48px;

  >div{

    display: flex;
    align-items: center;
    justify-content: center;


    display: flex;
    gap: 14px;

    >svg{
      font-size: 24px;
    }

    >label{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 23px;
      line-height: 160%;
    }
  }

  >button{
    height: 32px;
    margin: 0;
  }

  .Insert{

    width: 188px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
`;