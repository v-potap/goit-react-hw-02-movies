import React, { Component } from 'react';
import styles from './App.module.css';

import MovieGrid from './MovieGrid/MovieGrid';

import movies from './movies.json';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  state = { filter: '' };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterMovies(movieList) {
    const { filter } = this.state;
    return movieList.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  render() {
    const filteredMovies = this.filterMovies(movies);
    const { filter } = this.state;

    return (
      <div className={styles.containerApp}>
        <SearchBar value={filter} onFilterChange={this.handleFilter} />
        <MovieGrid items={filteredMovies} />
      </div>
    );
  }
}

export default App;
