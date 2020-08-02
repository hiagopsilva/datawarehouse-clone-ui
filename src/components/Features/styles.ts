import styled from 'styled-components';

import RectangleOne from '../../assets/RectangleOne.svg';

export const Container = styled.div`
  width: 100%;

  div.row {
    display: flex;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 180px;

  h1 {
    font-size: 40px;
    color: ${props => props.theme.colors.primary};
  }

  h4 {
    width: 520px;
    margin-top: 30px;

    text-align: center;
    font-weight: 500;
    color: ${props => props.theme.colors.fontPrimaryColor};
  }
`;

export const Card = styled.div`
  display: flex;
  width: 560px;
  height: 360px;
  margin-top: 60px;
  /* background-color: red; */

  background-image: url(${RectangleOne});
  background-repeat: no-repeat;
  background-position-x: 90px;

  & + div {
    margin-left: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 30px;
  padding-right: 40px;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 28px;
    margin-top: 52px;
  }

  h4 {
    color: ${props => props.theme.colors.fontPrimaryColor};
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;

    margin-top: 18px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;

  margin-bottom: 40px;

  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
    margin-right: 14px;

    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.primary};
  }
`;
