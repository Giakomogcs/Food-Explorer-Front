import styled from "styled-components";

export const Container = styled.header`
  grid-area: footer;

  height: 77px;
  width: 100%;
  padding: 24px auto;

  display: flex;

  align-items: center;
  
  background-color: ${({theme}) => theme.COLORS.DARK_600};
  
  >div{
    width: 100%;
    margin: auto 36px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'DM Sans';
    font-weight: 400;
  }

  >img{
    height: 19px;
    width: auto;
  }

  >p{
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    font-size: 12px;
    line-height: 16px;
  }
`;
