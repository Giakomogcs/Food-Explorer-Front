import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  height: 32px;
  border-radius: 5px;
  padding: 4px 8px;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
`
