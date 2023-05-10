import Button from '../Button/Button';
import Input from '../Input/Input';
import Title from '../Title/Title';
import styles from './Form.module.scss';
import React from 'react';

function Form({ submitFn }) {
  return (
    <div className={styles.wrapper}>
      <Title>Add new twitter account</Title>
      <form autoComplete='off' className={styles.form} onSubmit={submitFn}>
        <Input name='name' label='Name' maxLength={30} />
        <Input name='link' label='Twitter link' />
        <Input name='image' label='Image' />
        <Input tag='textarea' name='description' label='Description' />

        <div className={styles.item}>
          <Button>Add new item</Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
