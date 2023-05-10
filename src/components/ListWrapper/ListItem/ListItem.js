import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';
import Title from '../../Title/Title';

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
        {/* <h2 className={styles.name}>{name}</h2> */}
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={twitterLink}>visit twitter page</Button>
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
