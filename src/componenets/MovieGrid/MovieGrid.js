import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.css';

const MovieGrid = movieList => {
  const movieItems = movieList.items;
  return (
    <>
      {movieItems.length > 0 ? (
        <ul className={styles.movieGrid}>
          {movieItems.map(item => (
            <li key={item.id}>
              <MovieCard movieItem={{ ...item }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching results!</p>
      )}
    </>
  );
};

MovieGrid.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default MovieGrid;
