import React, { useRef, useState } from 'react';
import './ImageUploader.scss';

const ImageUploader = ({ onFileSelect, imageActive, setimageActive }) => {
  const fileRef = useRef(null);
  const [image, setimage] = useState(false);
  
  const handlerImageInput = (e) => {
    const file = e.target.files[0];
    
    if (file && !file.type.match('image/jpeg')) {
      return;
    }
    
    const reader = new FileReader();
    
    reader.onload = (ev) => {
      setimage(ev.target.result);
      setimageActive(true)
      onFileSelect(ev.target.result);
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <div
      className='offers-form__field-upload'
      onClick={() => {
        fileRef.current && fileRef.current.click();
      }}>
      (
      <div className='offers-form__field-upload-group'>
        {imageActive ? (
          <img
            className='offers-form__field-upload-thumb'
            src={image}
            alt='user_image'
          />
        ) : <p className='offers-form__field-upload-title'>
        Drag or Click to upload image
      </p>}
        )
      </div>
      <input
        // hide
        ref={fileRef}
        type='file'
        className='offers-form__field-upload-button'
        onChange={handlerImageInput}
      />
    </div>
  );
};

export default ImageUploader;
