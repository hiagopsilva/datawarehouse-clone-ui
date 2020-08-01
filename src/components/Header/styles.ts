import styled, { css } from 'styled-components';

interface PropsMenu {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 25px 120px 0px;
`;

export const Nav = styled.div`
  display: flex;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 60px;

  list-style: none;
`;

export const Item = styled.li<PropsMenu>`
  font-size: 20px;
  color: ${props =>
    props.active && css
      ? `${props.theme.colors.fontPrimaryColor}; font-weight: bold;`
      : props.theme.colors.fontPrimaryColor};

  & + li {
    margin-left: 56px;
  }

  &:hover {
    color: ${props => props.theme.colors.fontPrimaryColor};
    font-weight: bold;
  }

  cursor: pointer;
`;

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    fill: '#9C69E2';
    cursor: pointer;
  }

  button {
    display: flex;
    align-items: center;
    padding: 14px 20px;

    font-size: 7px;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.fontSecundaryColor};
    border: none;
    border-radius: 50px;

    box-shadow: 5px 5px 5px ${props => props.theme.colors.buttonShadow};
    margin-left: 16px;

    h1 {
      margin-right: 16px;
    }

    /* svg {
      color: '#9C69E2';
    } */
  }
`;
