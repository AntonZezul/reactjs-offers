import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import OfferCard from '../../offer-card/OfferCard';
import './OffersList.scss';

const OffersList = () => {
  const { firestore } = useContext(Context);
  const [offersList, setoffersList] = useState([]);

  useEffect(() => {
    firestore
      .collection('offers')
      .get()
      .then((data) => {
        setoffersList(data.docs);
      });
  }, [firestore]);

  return (
    <div className='offers'>
      <div className='wrapper-offers'>
        <h2 className='offers__title'>List of offers</h2>
        {offersList && offersList.length === 0 && (
          <p className='offers__cards-empty'>No offers at the moment</p>
        )}
        <div className='offers__cards'>
          {offersList &&
            offersList
              .sort(
                (a, b) =>
                  b.data().createdAt.seconds * 1000 -
                  a.data().createdAt.seconds * 1000
              )
              .map((card) => {
                return <OfferCard key={card.data().createdAt} card={card} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default OffersList;
