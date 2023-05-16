import styled from 'styled-components'

export const Container = styled.div`

  overflow: hidden;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 144px auto 77px;

  grid-template-areas: 
  "header"
  "content"
  "footer";

`;

export const Content = styled.div`
  
  grid-area: content;

  height: 100%;
  min-width: 320px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

`;


export const Pratos = styled.ul`
  list-style: none;
  width: 100%;

  overflow-x: auto;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  gap: 12px;

  /* width */
  ::-webkit-scrollbar {
    width: 20px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #001119;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #192227;
    border-radius: 10px;
  }

`;

export const FooterHome = styled.footer`
  grid-area: footer;
`;

export const Picture = styled.div`
  height: 88px;
  width: 88px;

  border-radius: 50%;

`;

