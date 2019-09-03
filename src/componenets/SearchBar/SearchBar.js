import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

const SearchBar = ({ value, onFilterChange }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onFilterChange}
    />
  );
};

SearchBar.defaultProps = {
  value: '',
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchBar;
