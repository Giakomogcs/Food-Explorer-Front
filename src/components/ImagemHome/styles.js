import styled from "styled-components";

export const Container = styled.div`
  

  min-width: 395px;
  height: 120px;

  margin: 44px 0;
  display: flex;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 3px;

  
  >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 190px;
    
    font-family: 'Poppins';
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    >h2{
      font-weight: 500;
      font-size: 18px;
      line-height: 140%;
    }
    
    >p{ 
      height: 34px;
      min-width: 202px;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
    }
  }
  
  >img{
    border: none;
    position: absolute;
    z-index: 1;
    width: auto;
    height: 150px;
    //width: 191px;
    //height: 149px;
    left: -10px;
    bottom: 715px;
  }

  @media all and (min-width: 570px) {
    >div{
      padding: 0 0 0 270px;
    }

    >img{
      border: none;
      position: absolute;
      z-index: 1;
      width: auto;
      height: 160px;
      //width: 191px;
      //height: 149px;
      left: 30px;
      bottom: 715px;
    }

  }

  @media all and (min-width: 768px) {
    height: 180px;
    display: flex;
    justify-content: center;
    padding: 0 0 0 20px;

    >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      font-family: 'Poppins';
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      
      >h2{
        font-weight: 500;
        font-size: 30px;
        line-height: 140%;
      }
      
      >p{ 

        font-size: 16px;
        line-height: 140%;
      }
    }
    
    >img{
      border: none;
      position: absolute;
      z-index: 1;
      width: auto;
      height: 300px;
      width: 350px;
      //height: 149px;
      left: 50px;
      bottom: 617px;
    }
  }

  @media all and (min-width: 1140px) {
    height: 220px;
    display: flex;
    justify-content: center;
    padding: 0 0 0 50px;

    >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      font-family: 'Poppins';
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      
      >h2{
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
      }
      
      >p{ 

        font-size: 16px;
        line-height: 140%;
      }
    }
    
    >img{
      border: none;
      position: absolute;
      z-index: 1;
      width: auto;
      height: 300px;
      width: 550px;
      //height: 149px;
      left: -10px;
      bottom: 633px;
    }
  }

`;
