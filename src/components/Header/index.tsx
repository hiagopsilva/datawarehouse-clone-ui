import React, { useState } from 'react';
import { FiArrowRight, FiMoon } from 'react-icons/fi';

import Logo from '../../assets/Logo.svg';

import { Container, Nav, Menu, Item, ThemeContainer } from './styles';

const Header: React.FC = () => {
  const [menu, setMenu] = useState({
    active: 'About',
    items: ['About', 'Help', 'Features', 'Signup'],
  });

  const handleMenu = (name: string) => {
    setMenu({ ...menu, active: name });
  };

  return (
    <Container>
      <Nav>
        <img src={Logo} alt="Logo" />

        <ul>
          <Menu>
            {menu.items.map(item => (
              <Item
                onClick={() => handleMenu(item)}
                key={item}
                active={menu.active === item}
              >
                {item}
              </Item>
            ))}
          </Menu>
        </ul>
      </Nav>

      <ThemeContainer>
        <FiMoon size={24} color="#4B5D68" />

        <button>
          <h1>Request Demo</h1>
          <FiArrowRight size={20} color="#9C69E2" />
        </button>
      </ThemeContainer>
    </Container>
  );
};

export default Header;
