import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => {
  return (
    <ul className='listWrapper__wrapper'>
      {props.items &&
        props.items.map((item) => <ListItem key={item.name} {...item} />)}
    </ul>
  );
};

export default ListWrapper;
