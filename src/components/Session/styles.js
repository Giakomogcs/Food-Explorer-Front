import styled from 'styled-components'

export const Container = styled.div`
  
  background: none;
  border: none;
  height: 54px;
  width: 100%;


  
  
  > button{
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 24px;
    
    width: 100%;
    
    display: flex;
    text-align:start ;

    border: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.DARK_1000};
    background-color: transparent;
    
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`;