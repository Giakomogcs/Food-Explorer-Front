import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

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
      border-radius: 8px;

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
    background-color: transparent;

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

  .Principal, .Segundo, .Terceiro{
    >label{
      display: flex;
      flex-direction: column;
      align-items: start;
      overflow: hidden;
      word-break: break-all;

      >p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        margin-bottom: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }

      >input, select, textarea {
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
        color: ${({theme}) => theme.COLORS.LIGHT_500};

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
  }
  
  #Price{
    margin-top: 24px;
  }
  
  #Description{
    height: 172px;
  
    display: flex;
    align-items: start;
    overflow: hidden;
    word-break: normal;
  }

  .SaveButton{
    height: 48px;
    width: 100%;
    margin: 0;

    display: flex;
    align-items: center;
    text-align: center;

    margin-bottom: 50px;
    padding: 12px 32px;
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  @media all and (min-width: 768px) {
    padding: 0px 56px 34px;
  }

  @media all and (min-width: 920px) {
    
    .Principal, .Segundo, .Terceiro{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;


      >.Nome{
        width: 100%;
        min-width: 230px;
      }
      >.Categoria{
        min-width: 250px;
      }

      .Description{
        width: 100%;
      }

    }

    >div{
      .tags{
        justify-content: start;
      }
    }
  
    .SaveButton{
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: end;
      margin-left: auto;
      margin-bottom: 10px;
      width: 200px;
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

  @media all and (min-width: 920px) {
   
    min-width: 250px;
    
  }
`;