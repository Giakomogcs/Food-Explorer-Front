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

