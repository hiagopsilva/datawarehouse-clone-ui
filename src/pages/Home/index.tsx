import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import HomeComponent from '../../components/Home';
import Features from '../../components/Features';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <HomeComponent />
      <Features />
    </Container>
  );
};

export default Home;
