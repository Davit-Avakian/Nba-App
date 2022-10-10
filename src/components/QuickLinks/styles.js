import styled from 'styled-components';

export const LinksContainer = styled.div`
  width: 98%;
  height: fit-content;
  background-color: #ffff;
  padding: 1.25rem;
  position: relative;
  top: -45%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-top: 0.75rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      border-bottom-width: 1px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: ${({ theme: { borderBottom } }) => borderBottom};

      a {
        font-family: Roboto, Arial, sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.25;
        max-width: 13rem;
        color: ${({ theme: { linkColor } }) => linkColor};

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      img {
        height: 13px;
        margin-left: 0.3rem;
      }
    }

    & li:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 1660px) {
    top: 4rem;
  }

  @media (max-width: 1050px) {
    top: 10rem;
    width: 100%;
  }
`;
