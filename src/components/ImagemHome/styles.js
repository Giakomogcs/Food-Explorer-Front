import styled from "styled-components";

export const Container = styled.div`
  

  min-width: 395px;
  height: 120px;

  margin: 44px 0;
  display: flex;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 3px;

  
  >.text{
    margin: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    //padding: 0 0 0 190px;
    
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
  
  .img{
    width:30%;
    >img{
      border: none;
      position: relative;
      z-index: 1;
      width: auto;
      height: 150px;
      //width: 191px;
      //height: 149px;
      left: -50px;
      bottom: 30px;
    }
  }

  @media all and (min-width: 570px) {

    .img{
      width: 45%;
      >img{
        border: none;
        z-index: 1;
        width: auto;
        height: 160px;
        //width: 191px;
        //height: 149px;
        left: -20px;
        bottom: 40px;
      }
    }

    .text{
      margin:0;
    }

  }

  @media all and (min-width: 900px) {
    height: 180px;
    display: flex;
    justify-content: center;
    padding: 0 0 0 20px;

    >.text{
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
    
   .img{
    width: 40%;
    >img{
      border: none;
      position: relative;
      z-index: 1;
      
      height: 300px;
      width: 350px;

      left: -50px;
      bottom: 80px;
    }
   }
  }

  @media all and (min-width: 1140px) {
    height: 220px;
    display: flex;
    justify-content: center;

    >.text{
      width: 100%;
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
    
    .img{
      width: 40%;
      >img{
        border: none;
        position: relative;
        z-index: 1;
        width: auto;
        height: 300px;
        width: 550px;
        //height: 149px;
        left: -90px;
        bottom: 80px;
      }
    }
  }

`;
