import styled from "styled-components";

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

`;

export const Content = styled.div`

  height: 34px;
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;
  

  background-color: ${({theme}) => theme.COLORS.DARK_700};

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > svg {
    height: 26px;
  }

`;

export const Menu = styled.button`
  border: none;
  background: none;

  > svg{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    width: 24px;
    height: 18px;
  }
`;

export const Receipt = styled.button`
  border: none;
  background: none;

  height: 34px;

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
  }
  
`;