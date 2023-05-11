import styled from "styled-components";

export const Container = styled.div`
  

  width: 376px;
  height: 120px;

  margin: 44px ;

  display: flex;

  justify-content: flex-end;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 3px;

  
  >div{
    
    margin: 36px 22px;
    
    font-family: 'Poppins';
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    >h2{
      font-weight: 600;
      font-size: 18px;
      line-height: 140%;
    }
    
    >p{ 
      height: 34px;
      width: 202px;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
    }
  }
  
  >img{
    border: none;
    position: relative;
    z-index: 1;
    width: 191px;
    height: 149px;
    left: 30px;
    bottom: 30px;
  }

`;
