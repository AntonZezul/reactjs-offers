import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='footer__items'>
          <div className='footer__logo'>
            <img className='footer__logo-pic' src={logo} alt='footer' />
          </div>
          <nav className='footer__nav'>
            <ul className='footer__menu'>
              <li className='footer__menu-item'>
                <Link to='/all-offers' className='footer__menu-link'>
                  All Offers
                </Link>
              </li>
              <li className='footer__menu-item'>
                <Link to='#!' className='footer__menu-link'>
                  Contacts
                </Link>
              </li>
              <li className='footer__menu-item'>
                <Link to='#!' className='footer__menu-link'>
                  About
                </Link>
              </li>
              <li className='footer__menu-item'>
                <Link to='#!' className='footer__menu-link'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
