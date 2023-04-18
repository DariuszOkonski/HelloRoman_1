import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const defaultImage =
  'https://www.1lo.gorzow.pl/wp-content/uploads/2019/11/user-no-name.png';

const ListItem = ({ image, name, description, twitterLink }) => {
  return (
    <li className='listItem___wrapper'>
      <img src={image || defaultImage} alt={name} className='listItem__image' />
      <div>
        <h2 className='listItem__name'>{name}</h2>
        <p className='listItem__description'>{description}</p>
        <a
          href={twitterLink}
          target='_blank'
          className='listItem__button'
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
