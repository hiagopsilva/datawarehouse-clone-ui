import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import HomeComponent from '../../components/Home';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <HomeComponent />
      <Features />
      {/* <Testimonials /> */}

      <Footer />
    </Container>
  );
};

export default Home;
