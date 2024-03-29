import React, { Component } from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';

const initialStateItems = [
  {
    image:
      'https://www.1lo.gorzow.pl/wp-content/uploads/2019/11/user-no-name.png',
    name: 'Dan Abramov',
    description: 'Working on @reactjs. The demo guy.',
    twitterLink: 'https://twitter.com/dan_abramov',
  },
  {
    image:
      'https://www.1lo.gorzow.pl/wp-content/uploads/2019/11/user-no-name.png',
    name: 'Ryan Florence',
    description:
      'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
  },
  {
    image:
      'https://www.1lo.gorzow.pl/wp-content/uploads/2019/11/user-no-name.png',
    name: 'Michael Jackson',
    description:
      'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
  },
  {
    image:
      'https://www.1lo.gorzow.pl/wp-content/uploads/2019/11/user-no-name.png',
    name: 'Kent C. Dodds',
    description:
      'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
  },
];

class App extends Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
