import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.header`

  position: fixed;
  z-index: 2;

  height: 144px;
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 56px 24px 28px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  @media all and (min-width: 768px) {
  
    height: 104px;
    padding: 24px 123px;

    display: flex;
    align-items: center;
  }

`;

export const Content = styled.div`

  height: 34px;
  width: 100%;
  margin: 0;

  display: flex;
  gap: 32px;

  align-items: center;
  justify-content: space-between;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  >.Search{
    display: none;
  }


  @media all and (max-width: 768px) {
    
    >svg{
      display: none;
    }
  }
  
  @media all and (min-width: 768px) {
    justify-content: center;
    
    >svg{
      min-width: 22px;
      font-size: 22px;
    }
  }

  @media all and (min-width: 1024px) {
    >.Search{
      display: flex;
      width: 100%;
      
      div{
        margin-bottom: 0;
      }
    }
  }


`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > svg {
    height: 26px;
  }

`;

export const Menu = styled(Link)`
  border: none;
  background: none;

  > img{
    width: 24px;
    height: 18px;
  }

  @media all and (min-width: 768px) {

    display: none;
  }
`;



export const Receipt = styled.button`
  border: none;
  background: none;

  height: auto;

  >div{
    width: 20px;
    height: 20px;
    margin-right: 10px;

    > img{
      width: 26px;
      height: 22px;
    }

    >span{
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({theme}) => theme.COLORS.TOMATO_100};
      color: ${({theme}) => theme.COLORS.LIGHT_100};

      
      border-radius: 50%;
      
      font-family: 'Poppins';
      font-size: 14px;
      
      position: relative;
      left: 15px;
      bottom: 35px;
    }

    >p{
      display: none;
    }
  }
  
  

  @media all and (min-width: 768px) {

    .Content{
      height: 104px;
      padding: 24px 123px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }


    
  
    .Receipt{
      width: 216px;
      height: 48px;
      border-radius: 5px;
      background-color: ${({theme}) => theme.COLORS.TOMATO_100};

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0;
      gap: 8px;

      p{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
      }

      span{
        display: none;
      }
    }
    
  }
`;