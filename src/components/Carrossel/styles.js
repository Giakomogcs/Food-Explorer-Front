import styled from "styled-components";

export const Container = styled.section`


  max-height: 341px;
  max-width: 428px;

  display: flex;
  flex-direction: column;

  margin-left: 24px;
  margin-bottom: 24px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  >p{
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 24px;
  }

`;

export const Card = styled.div`
  

  width: 210px;
  height: 292px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
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