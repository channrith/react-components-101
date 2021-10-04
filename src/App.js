import React, { Component } from 'react';
import './App.css';

import { CartList } from './components/cart-list/cart-list.component';
import { SearchBox } from './components/search/search.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const monsterFilter = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>React Components 101</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CartList monsters={monsterFilter} />
      </div>
    );
  }
}
export default App;
