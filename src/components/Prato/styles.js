import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.li`
  .Icon {
    position: absolute;

    >svg{
      width: 21px;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      position: relative;
      left: 170px;
      top: 16px;

      cursor: pointer;
    }
  }

  .body{
    min-width: 210px;
    min-height: 292px;

    display: flex;
    align-items: center;
    justify-content: initial;
    flex-direction: column;
    gap: 15px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    background-color: ${({theme}) => theme.COLORS.DARK_300};
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    >.title{
      font-size: 14px;
      line-height: 24px;
      text-align: center;

    }

    .description{
      display: none;
    }

    >.price{
      font-size: 16px;
      line-height: 16px;
      text-align: center;
      font-weight: 400;

      color: ${({theme}) => theme.COLORS.CAKE_200};
    }
  }

  @media all and (min-width: 768px) {
    .Icon{
      >svg{

        width: 24px;
        position: relative;
        left: 280px;
        top: 22px;
        cursor: pointer;
      }
    }

    .body{
      min-width: 330px;
      min-height: 460px;

      .title{
        font-size: 24px;
        line-height: 140%;
      }

      .description{
        display: flex;
        max-width: 330px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.LIGHT_400};

        padding: 0 24px;
      }

      .price{
        font-size: 24px;
        line-height: 140%;
      }

    }
  }

`;


export const Picture = styled.div`
  >img{
    height: 88px;
    width: 88px;
    border-radius: 50%;
    cursor: pointer;

    margin-top: 25px;
  }

  

  @media all and (min-width: 768px) {
    >img{
      height: 176px;
      width: 176px;
      border-radius: 50%;

      margin-top: 40px;
    }
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
    display: flex;
    gap: 14px;

    >svg{
      font-size: 24px;
      cursor: pointer;
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
    margin: 0;
  }

  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 16px;

  }
`;
