import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';

const ListWrapper = (props) => {
  return (
    <ul className={styles.wrapper}>
      {props.items &&
        props.items.map((item) => <ListItem key={item.name} {...item} />)}
    </ul>
  );
};

export default ListWrapper;
