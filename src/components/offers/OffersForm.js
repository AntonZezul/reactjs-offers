import React from 'react';
import './OffersForm.scss';

const OffersForm = () => {
  return (
    <main>
      <div className='offers-form'>
        <div className='wrapper-main'>
          <h2 className='offers-form__title'>Form for your offer</h2>
          <form className='offers-form__form'>
            <input
              className='offers-form__field'
              type='text'
              name='fullname'
              placeholder='Full Name'></input>
            <input
              className='offers-form__field'
              type='text'
              name='address'
              placeholder='Address'></input>
            <textarea
              className='offers-form__field offers-form__field_desc'
              type='text'
              name='offer-desc'
              placeholder='Your offer'
            />
            <div className='offers-form__field-upload'>
              <input
                className='offers-form__field-upload-button'
                type='file'
                name='address'
              />
              
            </div>
            <button className='offers-form__submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default OffersForm;
