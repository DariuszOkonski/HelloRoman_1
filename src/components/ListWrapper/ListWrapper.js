import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWrapper = () => {
  return (
    <ul className='listWrapper__wrapper'>
      {twitterAccounts.map((item, index) => (
        <ListItem
          key={index}
          name={item.name}
          description={item.description}
          image={item.image}
          link={item.twitterLink}
        />
      ))}
    </ul>
  );
};

export default ListWrapper;
