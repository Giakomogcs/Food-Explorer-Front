import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 144px;
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: left;
  padding: 56px 24px 28px;
  gap: 16px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  >svg{
    margin-left: 16px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 18px;
  }

  >p{
    
    font-size: 21px;
    line-height: 25px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

`;
