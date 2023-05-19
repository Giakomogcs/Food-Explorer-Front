import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  overflow: auto;

  >header{
    display: flex;
    align-items: end;
    justify-content: center;

    img{
      margin: 158px auto 73px;
      height: 44px;
    }
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  height: auto;
  padding: 0 56px;

  >div{
    display: flex;
    flex-direction: column;
    justify-content: right;
    gap: 8px;
  }

  >label{
    height: 16px;
    width: auto;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  >button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  >a{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

    margin: 32px auto 0;
  }

`;