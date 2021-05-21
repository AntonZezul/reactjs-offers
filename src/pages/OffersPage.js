import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import OffersForm from '../components/offers/OffersForm';
import './Pages.scss';

const OffersPage = () => {
  return (
    <div className='page'>
      <Header />
      <main>
        <Intro />
        <OffersForm />
      </main>
      <Footer/>
    </div>
  );
};

export default OffersPage;
