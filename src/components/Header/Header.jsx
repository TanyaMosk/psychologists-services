// import {
//   HeaderContainer,
//   Navigation,
//   StyledLink,
//   IconWrapper,
// } from './Header.styled';
// import sprite from 'assets/sprite.svg';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BasicModalWindom } from '../BasicModalWindom/BasicModalWindom';
import { LogInModal } from '../LogInModal/LogInModal';
import { RegistrationModal } from '../RegistrationModal/RegistrationModal';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegis, setIsOpenRegis] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    if (isOpen) setIsOpen(false);
    if (isOpenRegis) setIsOpenRegis(false);
  };

  const handleOpenModalRegis = () => {
    setIsOpenRegis(true);
  };

  return (
    <header>
      <NavLink to="/">
        psychologists.
        <span>services</span>
      </NavLink>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/psychologists">Psychologists</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
      <div>
        <button type="button" onClick={handleOpenModal}>
          Log In
        </button>
        <button type="button" onClick={handleOpenModalRegis}>
          Registration
        </button>
      </div>
      {isOpen && (
        <BasicModalWindom isOpen={isOpen} onRequestClose={handleCloseModal}>
          <LogInModal />
        </BasicModalWindom>
      )}
      {isOpenRegis && (
        <BasicModalWindom
          isOpen={isOpenRegis}
          onRequestClose={handleCloseModal}
        >
          <RegistrationModal />
        </BasicModalWindom>
      )}
    </header>
  );
};
