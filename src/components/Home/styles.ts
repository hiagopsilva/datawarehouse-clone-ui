import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;

  height: 460px;
  color: ${props => props.theme.colors.primary};
`;

export const Content = styled.div`
  position: absolute;

  h1 {
    font-size: 70px;
    width: 500px;
    line-height: 75px;
  }

  h4 {
    margin-top: 32px;
    width: 410px;

    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  button {
    color: ${props => props.theme.colors.fontSecundaryColor};
    background: ${props => props.theme.colors.secundary};
    border: none;
    border-radius: 50px;

    padding: 16px 32px;
    font-size: 16px;
    font-weight: 550;

    margin-top: 44px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ContainerLogo = styled.div`
  margin-top: auto;
  margin-left: auto;
  img {
    height: 380px;
  }
`;

export const SubContainer = styled.div`
  background: ${props => props.theme.colors.backgroundTertiary};
  border-radius: 50px;

  display: flex;
  margin-top: 120px;
`;

export const SubContainerLogo = styled.div``;

export const SubContent = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */

  margin: 90px 80px 60px;
  h1 {
    font-size: 40px;
    color: ${props => props.theme.colors.primary};
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;

    margin-top: 40px;

    color: ${props => props.theme.colors.fontPrimaryColor};
  }
`;
