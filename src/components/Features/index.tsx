import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Header, Card, Content, Footer } from './styles';

import FigureOne from '../../assets/figureOne.svg';
import FigureTwo from '../../assets/figureTwo.svg';
import FigureThree from '../../assets/figureThree.svg';
import FigureFour from '../../assets/figureFour.svg';

const Features: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Features</h1>
        <h4>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </h4>
      </Header>

      <div className="row">
        <Card>
          <img src={FigureOne} alt="Search Data" />

          <Content>
            <h1>Search Data</h1>

            <h4>
              Don't worry if your data is very large, the Data Warehouse
              provides a search engine, which is useful for making it easier to
              find data effectively saving time.
            </h4>

            <Footer>
              <h1>Learn more</h1>
              <FiArrowRight size={24} color="#9C69E2" />
            </Footer>
          </Content>
        </Card>
        <Card>
          <img src={FigureTwo} alt="Search Data" />

          <Content>
            <h1>24 Hours Access</h1>

            <h4>
              Access is given 24 hours a full morning to night and meet again in
              he morning, giving you comfort when you need data when urgent.
            </h4>

            <Footer>
              <h1>Learn more</h1>
              <FiArrowRight size={24} color="#9C69E2" />
            </Footer>
          </Content>
        </Card>
      </div>

      <div className="row">
        <Card>
          <img src={FigureThree} alt="Search Data" />

          <Content>
            <h1>Print Out</h1>

            <h4>
              Print out service gives tou convenience if someday you need print
              data, just edit it all and just print it.
            </h4>

            <Footer>
              <h1>Learn more</h1>
              <FiArrowRight size={24} color="#9C69E2" />
            </Footer>
          </Content>
        </Card>
        <Card>
          <img src={FigureFour} alt="Search Data" />

          <Content>
            <h1>Security Code</h1>

            <h4>
              Data Security is one of our best facilites. Allows for your files
              to be after, The file can be secured with a code or password that
              you created, so only you can open the file.
            </h4>

            <Footer>
              <h1>Learn more</h1>
              <FiArrowRight size={24} color="#9C69E2" />
            </Footer>
          </Content>
        </Card>
      </div>
    </Container>
  );
};

export default Features;
