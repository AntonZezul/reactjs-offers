import React, { useState } from 'react';

const OfferCard = ({ card }) => {
  const [cardActive, setcardActive] = useState(false);
  const date = new Date(card.data().createdAt.seconds * 1000);
  return (
    <div
      className='offers__card'
      onClick={() => {
        setcardActive((prev) => !prev);
      }}>
      <div className='offers__card-pic'>
        <img
          className='offers__card-thumb'
          src={card.data().image}
          alt='user_pic'
        />
      </div>
      <div className='offers__card-info'>
        <p className='offers__card-info-details'>Name: {card.data().name}</p>
        <p className='offers__card-info-details'>
          Address: {card.data().address}
        </p>
        {cardActive && (
          <p className='offers__card-info-details'>
            {'Description: ' + card.data().description}
          </p>
        )}
        {cardActive && (
          <p className='offers__card-info-details offers__card-info-details_date'>
            {date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' ' +
              date.getHours() +
              ':' +
              date.getMinutes() +
              ':' +
              date.getSeconds()}
          </p>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
