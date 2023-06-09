import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.header`

  position: fixed;
  z-index: 2;

  height: 144px;
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;
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

  display: flex;

  align-items: center;
  justify-content: center;
  

  background-color: ${({theme}) => theme.COLORS.DARK_700};
  
  @media all and (max-width: 768px) {
    .Search {
      display: none;
    }
  
    .Buttons {
      display: none;
    }
  }

  @media all and (min-width: 768px) {

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    
    .Menu{
      display: none;
    }
    
    .Search {
      display: none;
    }
    
    .Buttons {
      display: flex;
      align-items: center;
      gap: 32px;

      >button{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        margin: 0;
        width: 216px;
        height: 48px;
      }

      svg{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 22px;
      }
    }
  }

  @media all and (min-width: 976px) {
    .Search {
      width: 100%;
      display: flex;
      div{
        margin: 0;
      }
    }
  }

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 8px;

  > svg {
    height: 26px;
  }

  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: end;
    align-items: end;
  }

`;

export const Menu = styled(Link)`
  border: none;
  background: none;


  > svg{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    width: 24px;
    height: 18px;
  }
`;

