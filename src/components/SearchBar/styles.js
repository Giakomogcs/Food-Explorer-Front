import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 36px;

  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border-radius: 5px;

  svg{
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    margin-left: 16px;
  }

  >input{
    height: 48px;
    width: 100%;
    padding: 16px;
    

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    background: transparent;
    border: 0;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    &:placeholder{
      //margin-left: 16px;
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }
`;