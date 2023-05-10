import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const defaultImage =
  'https://www.1lo.gorzow.pl/wp-content/uploads/2019/11/user-no-name.png';

const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? 'img' : 'div';

  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image || defaultImage}
        alt={name}
        className={image ? styles.image : styles.imageNone}
      />
      <div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <a
          href={twitterLink}
          target='_blank'
          className={styles.button}
          rel='noreferrer'
        >
          visit twitter page
        </a>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: 'One of the React creators',
};

export default ListItem;
