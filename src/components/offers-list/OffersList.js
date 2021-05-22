import React, { useState } from 'react';
import bg from '../../images/intro-bg.jpg';
import './OffersList.scss';

const OffersList = () => {
  const [cardActive, setcardActive] = useState(false);
  return (
    <div className='offers'>
      <div className='wrapper-offers'>
        <h2 className='offers__title'>List of offers</h2>
        <div className='offers__cards'>
          <div className='offers__card' onClick={()=>{setcardActive(prev=>!prev)}}>
            <div className='offers__card-pic'>
              <img className='offers__card-thumb' src={bg} alt='user_pic' />
            </div>
            <div className='offers__card-info'>
              <p className='offers__card-info-details'>Name: Anton Zezul</p>
              <p className='offers__card-info-details'>
                Address: Kosice, Jedlikova 9
              </p>
              {cardActive && <p className='offers__card-info-details'>
                Description: Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>}
              {cardActive && <p className='offers__card-info-details'>
                Date of creation: 22.05.2021, 12.00.00
              </p>}
              
            </div>
          </div>
          <div className='offers__card' onClick={()=>{setcardActive(prev=>!prev)}}>
            <div className='offers__card-pic'>
              <img className='offers__card-thumb' src={bg} alt='user_pic' />
            </div>
            <div className='offers__card-info'>
              <p className='offers__card-info-details'>Name: Anton Zezul</p>
              <p className='offers__card-info-details'>
                Address: Kosice, Jedlikova 9
              </p>
              {cardActive && <p className='offers__card-info-details'>
                Description: Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>}
              {cardActive && <p className='offers__card-info-details'>
                Date of creation: 22.05.2021, 12.00.00
              </p>}
              
            </div>
          </div>
          <div className='offers__card' onClick={()=>{setcardActive(prev=>!prev)}}>
            <div className='offers__card-pic'>
              <img className='offers__card-thumb' src={bg} alt='user_pic' />
            </div>
            <div className='offers__card-info'>
              <p className='offers__card-info-details'>Name: Anton Zezul</p>
              <p className='offers__card-info-details'>
                Address: Kosice, Jedlikova 9
              </p>
              {cardActive && <p className='offers__card-info-details'>
                Description: Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>}
              {cardActive && <p className='offers__card-info-details'>
                Date of creation: 22.05.2021, 12.00.00
              </p>}
              
            </div>
          </div>
          <div className='offers__card' onClick={()=>{setcardActive(prev=>!prev)}}>
            <div className='offers__card-pic'>
              <img className='offers__card-thumb' src={bg} alt='user_pic' />
            </div>
            <div className='offers__card-info'>
              <p className='offers__card-info-details'>Name: Anton Zezul</p>
              <p className='offers__card-info-details'>
                Address: Kosice, Jedlikova 9
              </p>
              {cardActive && <p className='offers__card-info-details'>
                Description: Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>}
              {cardActive && <p className='offers__card-info-details'>
                Date of creation: 22.05.2021, 12.00.00
              </p>}
              
            </div>
          </div>
          <div className='offers__card' onClick={()=>{setcardActive(prev=>!prev)}}>
            <div className='offers__card-pic'>
              <img className='offers__card-thumb' src={bg} alt='user_pic' />
            </div>
            <div className='offers__card-info'>
              <p className='offers__card-info-details'>Name: Anton Zezul</p>
              <p className='offers__card-info-details'>
                Address: Kosice, Jedlikova 9
              </p>
              {cardActive && <p className='offers__card-info-details'>
                Description: Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>}
              {cardActive && <p className='offers__card-info-details'>
                Date of creation: 22.05.2021, 12.00.00
              </p>}
              
            </div>
          </div>
          <div className='offers__card' onClick={()=>{setcardActive(prev=>!prev)}}>
            <div className='offers__card-pic'>
              <img className='offers__card-thumb' src={bg} alt='user_pic' />
            </div>
            <div className='offers__card-info'>
              <p className='offers__card-info-details'>Name: Anton Zezul</p>
              <p className='offers__card-info-details'>
                Address: Kosice, Jedlikova 9
              </p>
              {cardActive && <p className='offers__card-info-details'>
                Description: Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>}
              {cardActive && <p className='offers__card-info-details'>
                Date of creation: 22.05.2021, 12.00.00
              </p>}
              
            </div>
          </div>
          <div className='offers__card' onClick={()=>{setcardActive(prev=>!prev)}}>
            <div className='offers__card-pic'>
              <img className='offers__card-thumb' src={bg} alt='user_pic' />
            </div>
            <div className='offers__card-info'>
              <p className='offers__card-info-details'>Name: Anton Zezul</p>
              <p className='offers__card-info-details'>
                Address: Kosice, Jedlikova 9
              </p>
              {cardActive && <p className='offers__card-info-details'>
                Description: Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>}
              {cardActive && <p className='offers__card-info-details'>
                Date of creation: 22.05.2021, 12.00.00
              </p>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersList;
