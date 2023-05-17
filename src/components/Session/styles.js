import styled from 'styled-components'

export const Container = styled.button`
  
  background: none;
  border: none;
  height: 54px;
  width: 100%;
  text-align:start ;

  > h2{
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.DARK_1000};
    
    padding: 10px;
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 24px;
  }
`;