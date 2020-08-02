import React from 'react';

import {
  Container,
  Content,
  ContainerLogo,
  SubContainer,
  SubContainerLogo,
  SubContent,
} from './styles';

import logoHome from '../../assets/logoHome.svg';
import SubLogoHome from '../../assets/subLogoHome.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <h1>Save your data storage here.</h1>

          <h4>
            Data warehouse is a data storage area that has been tested for
            security, so you can store your dara here safely but not be afraid
            of being stolen by others.
          </h4>

          <button type="button">Learn more</button>
        </Content>

        <ContainerLogo>
          <img src={logoHome} alt="Logo" />
        </ContainerLogo>
      </Container>

      <SubContainer>
        <SubContainerLogo>
          <img src={SubLogoHome} alt="SubLogo" />
        </SubContainerLogo>

        <SubContent>
          <h1>We are a high-level data storage bank</h1>

          <h4>
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this Data Warehouse.
          </h4>
        </SubContent>
      </SubContainer>
    </>
  );
};

export default Home;
