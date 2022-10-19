import styled, { createGlobalStyle } from 'styled-components';
import titleFont from '../src/assets/font/titleFont.otf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: titleFont;
        src: url(${titleFont});
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #f6f6f6;
    }
`;

export const AppContainer = styled.div`
  @media (max-width: 1050px) {
    overflow-x: hidden;
  }
`;

export const MainWrapper = styled.div`
  width: 75%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  margin-top: 200px;

  @media (max-width: 1600px) {
    width: 90%;
  }

  @media (max-width: 1600px) {
    width: 95%;
  }

  @media (max-width: 1050px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SecondaryWrapper = styled(MainWrapper)`
  margin-top: 550px;

  @media (max-width: 1600px) {
    width: 90%;
  }

  @media (max-width: 1400px) {
    width: 95%;
  }

  @media (max-width: 1050px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  width: 75%;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const SideBar = styled.div`
  width: 20%;
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  border-bottom: ${({ theme: { borderBottom } }) => borderBottom};
  height: 35px;

  h1 {
    text-transform: uppercase;
    font-family: titleFont;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 0.8;
    margin-right: 0.5rem;
  }
`;
