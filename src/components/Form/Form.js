import React from 'react';

function Form({ submitFn }) {
  return (
    <form onSubmit={submitFn}>
      <input placeholder='name' name='name' type='text' />
      <input placeholder='link' name='link' type='text' />
      <input placeholder='image' name='image' type='text' />
      <textarea placeholder='description' name='description' />
      <button type='submit'>add new item</button>
    </form>
  );
}

export default Form;
