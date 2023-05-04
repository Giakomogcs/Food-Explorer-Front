import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 144px;
  width: 100%;

  display: flex;

  justify-content: space-between;
  padding: 56px 24px 28px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};;
`