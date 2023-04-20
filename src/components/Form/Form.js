import styles from './Form.module.scss';
import React from 'react';

function Form({ submitFn }) {
  return (
    <div className={styles.wrapper}>
      <h2>Add new twitter account</h2>
      <form className={styles.form} onSubmit={submitFn}>
        <div className={styles.item}>
          <input className={styles.input} id='name' name='name' type='text' />
          <label className={styles.label} htmlFor='name'>
            Name
          </label>
          <div className={styles.bar} />
        </div>
        <div className={styles.item}>
          <input className={styles.input} id='link' name='link' type='text' />
          <label className={styles.label} htmlFor='link'>
            Link
          </label>
          <div className={styles.bar} />
        </div>
        <div className={styles.item}>
          <input className={styles.input} id='image' name='image' type='text' />
          <label className={styles.label} htmlFor='image'>
            Image
          </label>
          <div className={styles.bar} />
        </div>
        <div className={styles.item}>
          <textarea name='description' />
        </div>
        <div className={styles.item}>
          <button className={styles.button} type='submit'>
            add new item
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
