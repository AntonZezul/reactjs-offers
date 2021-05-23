import React, { useContext, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './OffersForm.scss';
import ImageUploader from '../image-uploader/ImageUploader';
import { Context } from '../..';

const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  address: Yup.string().required('Address is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().required('Image is required'),
});

const OffersForm = () => {
  const { firestore, firebase } = useContext(Context);
  const [imageActive, setimageActive] = useState(false);
  const [imageData, setimageData] = useState();
  const [dragging, setDragging] = useState(false);
  const dropRef = useRef();
  let dragCounter = 0;

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter > 0) return;
    setDragging(false);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const div = dropRef.current;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);

    return () => {
      div.removeEventListener('dragenter', handleDragIn);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
    };
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      description: '',
      image: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await firestore.collection('offers').add({
          name: values.name,
          address: values.address,
          description: values.description,
          image: values.image,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        resetForm();
        setimageActive(false);
      } catch (e) {}
    },
  });

  const { values, errors, touched, handleSubmit, handleChange, resetForm } =
    formik;

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    Array.from(e.dataTransfer.files).forEach((el) => {
      if (el && e.dataTransfer.files.length > 0 && el.type.includes('image')) {
        const reader = new FileReader();

        reader.onload = (ev) => {
          setimageData(ev.target.result);
          values.image = ev.target.result;
          setimageActive(true);
        };

        reader.readAsDataURL(e.dataTransfer.files[0]);
        e.dataTransfer.clearData();
        dragCounter = 0;
      } else {
        return;
      }
    });
  };

  return (
    <main>
      <div className='offers-form'>
        <div className='wrapper-main'>
          <h2 className='offers-form__title'>Form for your offer</h2>
          <form className='offers-form__form' onSubmit={handleSubmit}>
            <div className='offers-form__form-group'>
              <input
                className='offers-form__field'
                type='text'
                name='name'
                placeholder='Full Name'
                value={values.name}
                onChange={handleChange}
              />
              {touched.name && (
                <p className='offers-form__field-error'>{errors.name}</p>
              )}
            </div>

            <div className='offers-form__form-group'>
              <input
                className='offers-form__field'
                type='text'
                name='address'
                placeholder='Address'
                value={values.address}
                onChange={handleChange}
              />
              {touched.address && (
                <p className='offers-form__field-error'>{errors.address}</p>
              )}
            </div>

            <div className='offers-form__form-group'>
              <textarea
                className='offers-form__field offers-form__field_desc'
                type='text'
                name='description'
                placeholder='Your offer description'
                value={values.description}
                onChange={handleChange}
              />
              {touched.description && (
                <p className='offers-form__field-error'>{errors.description}</p>
              )}
            </div>
            <div className='offers-form__form-group' ref={dropRef}>
              <ImageUploader
                imageDrop={imageData}
                dropRef={dropRef}
                imageActive={imageActive}
                setimageActive={setimageActive}
                dragble={dragging}
                onFileSelect={(image) => {
                  setimageData('');
                  values.image = image;
                }}
              />
              {touched.image && (
                <p className='offers-form__field-error'>{errors.image}</p>
              )}
            </div>
            <div className='offers-form__form-group'>
              <button className='offers-form__submit' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default OffersForm;
