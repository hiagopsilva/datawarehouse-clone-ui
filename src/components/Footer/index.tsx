import React from 'react';
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMessageSquare,
} from 'react-icons/fi';

import Logo from '../../assets/Logo.svg';

import {
  Container,
  Header,
  Content,
  Footer as FooterComponent,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Header>
        <div className="left">
          <h1>Try for free!</h1>
          <h4>Get limited 1week free try our features!</h4>
        </div>

        <div className="right">
          <button type="button" className="learnMore">
            Learn more
          </button>
          <button type="button" className="requestDemo">
            Request Demo
            <FiArrowRight size={24} />
          </button>
        </div>
      </Header>

      <Content>
        <div className="column">
          <div className="header">
            <img src={Logo} alt="logo" />
            <h1>DataWarehouse</h1>
          </div>

          <div className="content">
            <h1>Warehouse Society, 234</h1>
            <h1>Bahagia Ave Street, PRBW 29281</h1>

            <div>
              <h2>info@warehouse.project</h2>
              <h2>1-232-3434</h2>
            </div>
          </div>
        </div>

        <div className="column">
          <h1>About</h1>

          <div className="columContent">
            <h2>Profile</h2>
            <h2>Features</h2>
            <h2>Careers</h2>
            <h2>DW News</h2>
          </div>
        </div>

        <div className="column">
          <h1>Help</h1>

          <div className="columContent">
            <h2>Support</h2>
            <h2>Sign Up</h2>
            <h2>Guide</h2>
            <h2>Reports</h2>
            <h2>Q&A</h2>
          </div>
        </div>

        <div className="column">
          <h1>Social Media</h1>

          <div className="circles">
            <div className="circle">
              <FiFacebook size={24} />
            </div>

            <div className="circle">
              <FiTwitter size={24} />
            </div>

            <div className="circle">
              <FiInstagram size={24} />
            </div>
          </div>
        </div>
      </Content>

      <FooterComponent>
        <div>
          <h1>&copy;Datawarehouse&trade;, 2020.All rights reserved.</h1>
          <h1>Company Registration Number: 21479524.</h1>
        </div>

        <div>
          <div className="circle">
            <FiMessageSquare size={24} />
          </div>
        </div>
      </FooterComponent>
    </Container>
  );
};

export default Footer;
