import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import HomeComponent from '../../components/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <HomeComponent />
    </Container>
  );
};

export default Home;
