import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  div.left {
    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 40px;
    }

    h4 {
      color: ${props => props.theme.colors.fontPrimaryColor};
      font-weight: 400;

      margin-top: 12px;
    }
  }

  div.right {
    display: flex;

    button {
      border-radius: 50px;
      border: 0;
      height: 52px;

      font-weight: bold;
      font-size: 14px;
    }

    button:hover {
      opacity: 0.8;
    }

    button.learnMore {
      color: ${props => props.theme.colors.fontSecundaryColor};
      background: ${props => props.theme.colors.tertiary};

      padding: 14px 32px;
      margin-right: 28px;
    }

    button.requestDemo {
      display: flex;
      align-items: center;
      padding: 14px 24px;

      color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.background};
      box-shadow: 5px 5px 5px ${props => props.theme.colors.buttonShadow};

      svg {
        margin-left: 14px;
        color: ${props => props.theme.colors.secundary};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;

  margin-top: 80px;

  div.column {
    display: flex;
    flex-direction: column;
    width: auto;

    div.header {
      display: flex;
      align-items: center;

      h1 {
        font-size: 24px;
        color: ${props => props.theme.colors.primary};
        margin-left: 16px;
      }
    }

    div.content {
      margin-top: 50px;
      width: 440px;

      h1 {
        color: ${props => props.theme.colors.primary};

        font-size: 17px;
        font-weight: 500;
      }

      h1 + h1 {
        margin-top: 8px;
      }

      div {
        margin-top: 40px;

        h2 {
          color: ${props => props.theme.colors.fontPrimaryColor};
          font-size: 16px;
          font-weight: 500;
        }
      }
    }

    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
      font-weight: 400;

      color: ${props => props.theme.colors.primary};
    }

    & + div.column {
      margin-right: 150px;
    }

    div.circles {
      display: flex;
      justify-content: space-between;
      width: 180px;

      margin-top: 20px;

      div.circle {
        background: ${props => props.theme.colors.buttonShadow};

        width: 50px;
        height: 50px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        svg {
          color: ${props => props.theme.colors.fontSecundaryColor};
        }
      }
    }

    div.columContent {
      margin-top: 28px;

      h2 {
        cursor: pointer;
      }

      h2 + h2 {
        margin-top: 12px;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 90px 0px 50px;
  padding-right: 80px;

  h1 {
    color: ${props => props.theme.colors.fontPrimaryColor};
    font-size: 12px;
    font-weight: 400;
  }

  div.circle {
    background: ${props => props.theme.colors.buttonShadow};

    width: 50px;
    height: 50px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
      color: ${props => props.theme.colors.secundary};
    }
  }
`;
