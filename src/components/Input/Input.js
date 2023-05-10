import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ tag: Tag, name, label, maxLength }) => (
  <div className={styles.item}>
    <Tag
      className={styles.input}
      id={name}
      name={name}
      type='text'
      maxLength={maxLength}
      required
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.bar} />
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
};

export default Input;
