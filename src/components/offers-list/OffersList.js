import React from 'react';
import bg from '../../images/intro-bg.jpg';
import './OffersList.scss';

const OffersList = () => {
  return (
    <div className='offers-list'>
      <div className='wrapper'>
        <h2 className='offers-list__title'>List of offers</h2>
        <ul className='offers-list__list'>
          <li className='offers-list__list-item'>
            <div className='offers-list__list-item-card'>
              {/* <div className='offers-list__list-item-info'> */}
                <p className='offers-list__list-item-card-parag'>
                  Name: Anton Zezul
                </p>
                <p className='offers-list__list-item-card-parag'>
                  Address: Jedlikova 9
                </p>
                <img
                  className='offers-list__list-item-card-pic'
                  src={bg}
                  alt='user_image'
                />
              {/* </div> */}
            </div>
          </li>
          <li className='offers-list__list-item'>
            <div className='offers-list__list-item-card'>
              {/* <div className='offers-list__list-item-info'> */}
                <p className='offers-list__list-item-card-parag'>
                  Name: Anton Zezul
                </p>
                <p className='offers-list__list-item-card-parag'>
                  Address: Jedlikova 9
                </p>
                <img
                  className='offers-list__list-item-card-pic'
                  src={bg}
                  alt='user_image'
                />
              {/* </div> */}
            </div>
          </li>
          <li className='offers-list__list-item'>
            <div className='offers-list__list-item-card'>
              {/* <div className='offers-list__list-item-info'> */}
                <p className='offers-list__list-item-card-parag'>
                  Name: Anton Zezul
                </p>
                <p className='offers-list__list-item-card-parag'>
                  Address: Jedlikova 9
                </p>
                <img
                  className='offers-list__list-item-card-pic'
                  src={bg}
                  alt='user_image'
                />
              {/* </div> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffersList;
