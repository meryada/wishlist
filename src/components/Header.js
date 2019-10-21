import React from 'react';
import logo_wishlist from '.././images/logo_wishlist.png';
import '../stylesheets/Header.scss';

const Header = props => {
  return (
    <div className='header__container'>
      <img className='header__logo' src={logo_wishlist} alt='logo lista de deseos'></img>
      <h1 className='header__title'>Mi lista de deseos</h1>
    </div>
  )
}

export default Header;