import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 36px;

  width: 100%;
  display: flex;
  align-items: center;

  gap: 14px;

  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border-radius: 5px;

  svg{
    margin-left: 16px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  >input{
    height: 48px;
    width: 100%;
    padding: 24px auto;
    

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    background: transparent;
    border: 0;

    &:placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }
`;