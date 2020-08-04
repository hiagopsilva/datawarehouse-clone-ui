import styled from 'styled-components';

import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  height: 500px;

  margin-top: 120px;
  padding: 80px 80px 50px;
  border-radius: 50px;

  background: ${props => props.theme.colors.secundary};
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.fontSecundaryColor};
`;

export const Card = styled.div``;

export const Slide = styled(Slider)`
  ul {
    li {
      /* width: 100px; */
      /* display: flex; */
      /* flex-direction */
      color: white;
    }
    background: #fff;
  }
`;
