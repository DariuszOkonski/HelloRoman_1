import './Form.css';
import React from 'react';

function Form({ submitFn }) {
  return (
    <div className='form__wrapper'>
      <h2>Add new twitter account</h2>
      <form className='form__form' onSubmit={submitFn}>
        <div className='form__item'>
          <input placeholder='name' name='name' type='text' />
        </div>
        <div className='form__item'>
          <input placeholder='link' name='link' type='text' />
        </div>
        <div className='form__item'>
          <input placeholder='image' name='image' type='text' />
        </div>
        <div className='form__item'>
          <textarea placeholder='description' name='description' />
        </div>
        <div className='form__item'>
          <button type='submit'>add new item</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
