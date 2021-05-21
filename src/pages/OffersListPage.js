import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './Pages.scss';
import OffersList from '../components/offers-list/OffersList';

const OffersListPage = () => {
  return (
    <div className='page'>
      <Header />
      <main>
        <OffersList />
      </main>
      <Footer />
    </div>
  );
};

export default OffersListPage;
