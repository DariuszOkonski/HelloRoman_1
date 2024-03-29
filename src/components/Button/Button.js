import styles from './Button.module.scss';

const Button = ({ children, href }) => (
  <>
    {href ? (
      <a href={href} target='_blank' className={styles.button} rel='noreferrer'>
        {children}
      </a>
    ) : (
      <button className={styles.button}>{children}</button>
    )}
  </>
);

export default Button;
