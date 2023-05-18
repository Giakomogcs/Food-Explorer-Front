import styled from "styled-components";

export const Container = styled.li`


  min-width: 210px;
  min-height: 292px;

  display: flex;
  align-items: center;
  justify-content: initial;
  flex-direction: column;
  
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  background-color: ${({theme}) => theme.COLORS.DARK_300};
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  >.title{
    font-size: 14px;
    line-height: 24px;
    text-align: center;

    margin-bottom: 12px;
  }

  >.price{
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  >svg{
    position: relative;
    font-size: 24px;
    left: 80px;
    top: 16px;
  }

`;


export const Picture = styled.div`
  >img{
    height: 88px;
    width: 88px;
    border-radius: 50%;
  }

`;

export const Include = styled.div`
  width: 162px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >div{
    margin-top: 20px;
    display: flex;
    gap: 14px;

    >svg{
      font-size: 24px;
    }

    >label{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      padding: 3px;

    }
  }

  >button{
    height: 32px;
  }
`;
