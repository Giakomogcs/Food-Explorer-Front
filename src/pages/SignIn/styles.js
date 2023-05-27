import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  overflow: auto;

  >div{
    display: flex;
    align-items: end;
    justify-content: center;

    img{
      margin: 158px auto 73px;
      height: 44px;
    }
  }

  @media all and (min-width: 860PX) {
    display: flex;
    flex-direction: row;  
    justify-content: center;
    align-items: center;

    padding: 80px 80px;
    gap: 80px;
    overflow: hidden;

    >div{
      width: auto;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      img{
        margin: 0;
        height: 44px;
      }
    }
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  height: auto;
  padding: 0 56px;

  >label{
    display: flex;
    flex-direction: column;
    justify-content: right;
    gap: 8px;
  }
  
  h1{
    display: none;
  }

  >p{
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

  @media all and (min-width: 860PX) {
    padding: 64px;
    border-radius: 16px;
    min-width: 400px;
    max-width: 476PX;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    h1{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 32px;
    }

    >label{
      >p{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }
    }

    button{
      margin: 0;
    }
  }
`;