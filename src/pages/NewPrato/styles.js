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
  
  padding: 34px 56px;
  
  >button{
    display: flex;
  
    height: 23px;
    width: auto;
    align-items: center;
    justify-content: center;
  
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
  
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  
    border: none;

  }

  >p{

    border-bottom-style:none;
    padding-left: 0px;
    margin-top: 24px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  div{
    
    .tags{
      width: 100%;
      height: auto;

      padding: 5px 8px;

      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;

      background-color: ${({theme}) => theme.COLORS.DARK_800};
    }

    >button{
      padding: none;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      border-bottom-style: none;

      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
    
  }


  .Voltar{
    margin-bottom: 35px;

    >.Smaller{
      height: 22px;
      width: 12px;
      margin-right: 11px;
    }
  }

  >h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    margin-bottom: 35px;
  }

  >label{

    >p{
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      margin-bottom: 8px;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    >input, select{
      height: 48px;
      width: 100%;
      padding: 16px;

      margin-bottom: 24px;

      background-color: ${({theme}) => theme.COLORS.DARK_800};
      
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      border-radius: 5px;
      border: 0;
      color: ${({theme}) => theme.COLORS.LIGHT_300};

      &:placeholder{
        //margin-left: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
      }
    }
    

    >select{
      background-color: ${({theme}) => theme.COLORS.DARK_900};
      padding: auto;

      &:placeholder{
        //margin-left: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }

      >option{
        border: 0;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
      }
    }

    select::-ms-expand {
      display: none;
    }

    
  }

  
  `;

export const Picture = styled.div`

  >p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    margin-bottom: 16px;
  }

  >label{
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 5px;
    margin-bottom: 24px;

    >p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    svg{
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      margin-left: 16px;
      font-size: 24px;
    }

    >input{
      display: none;
    }

  }
`;