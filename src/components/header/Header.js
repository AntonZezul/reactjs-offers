import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.scss';

const Header = () => {
  const [headerActive, setheaderActive] = useState(false);
  const [burgerActive, setburgerActive] = useState(false);
  const headerLinks = document.querySelectorAll('.header__link');
  const burgerLines = document.querySelectorAll('.burger__line');

  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      setheaderActive(true);
      headerLinks.forEach((el) => el.classList.add('header__link_active'));
      burgerLines.forEach((el) => el.classList.add('burger__line_active'));
    } else {
      setheaderActive(false);
      headerLinks.forEach((el) => el.classList.remove('header__link_active'));
      burgerLines.forEach((el) => el.classList.remove('burger__line_active'));
    }
  };

  return (
    <div className={`header ${headerActive ? 'header_active' : ''}`}>
      <div className='wrapper'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <Link className='header__logo-link' to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <nav className={`header__nav ${burgerActive ? 'header__nav_active' : ''}`}>
            <ul className='header__list'>
              <li className='header__item'>
                <Link className='header__link' to='/'>
                  Add Offer
                </Link>
              </li>
              <li className='header__item'>
                <Link className='header__link' to='/all-offers'>
                  All Offers
                </Link>
              </li>
            </ul>
            <div className='header__nav-close' onClick={()=>setburgerActive(false)}>
              <span className='header__nav-close-line'></span>
              <span className='header__nav-close-line'></span>
            </div>
          </nav>
          <div className='header__burger' onClick={()=>setburgerActive(true)}>
            <span className='burger__line burger__line_first'></span>
            <span className='burger__line burger__line_second'></span>
            <span className='burger__line burger__line_third'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
