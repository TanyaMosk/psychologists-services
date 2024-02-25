// import {
//   HeaderContainer,
//   Navigation,
//   StyledLink,
//   IconWrapper,
// } from './Header.styled';
// import sprite from 'assets/sprite.svg';

import { NavLink } from 'react-router-dom';

export const Header = () => {
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
        <button type="button">Log In</button>
        <button type="button">Registration</button>
      </div>
    </header>
    // <HeaderContainer>
    //   <Navigation>
    //     <StyledLink to="/first">
    //       <IconWrapper>
    //         <use href={`${sprite}#icon-logo`} />
    //       </IconWrapper>
    //       First
    //     </StyledLink>
    //     <StyledLink to="/second">
    //       <IconWrapper>
    //         <use href={`${sprite}#icon-logo`} />
    //       </IconWrapper>
    //       Second
    //     </StyledLink>
    //   </Navigation>
    // </HeaderContainer>
  );
};
