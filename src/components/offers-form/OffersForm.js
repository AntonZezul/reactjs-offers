import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './OffersForm.scss';
import ImageUploader from '../image-uploader/ImageUploader';
import { Context } from '../..';

const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  address: Yup.string().required('Address is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().required('Image is required')
});

const OffersForm = () => {
  const { firestore, firebase } = useContext(Context);
  const [imageActive, setimageActive] = useState(false)

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
        setimageActive(false)
      } catch (e) {
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    resetForm,
  } = formik;

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
              {touched.name && <p className='offers-form__field-error'>{errors.name}</p>}
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
              {touched.address && <p className='offers-form__field-error'>{errors.address}</p>}
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
              {touched.description && <p className='offers-form__field-error'>{errors.description}</p>}
            </div>
            <div className='offers-form__form-group'>
              <ImageUploader
              imageActive={imageActive}
              setimageActive={setimageActive}
                onFileSelect={(image) => {
                  values.image = image;
                  console.log(image)
                }}
              />
              {touched.image && <p className='offers-form__field-error'>{errors.image}</p>}
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
