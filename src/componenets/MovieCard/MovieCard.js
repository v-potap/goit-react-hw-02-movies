import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieCard.module.css';

const MovieCard = ({ movieItem }) => {
  return (
    <div className={styles.movieCard}>
      <img src={movieItem.posterUrl} alt={movieItem.title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{movieItem.title}</h2>
        <p className={styles.descr}>{movieItem.overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}).isRequired;

export default MovieCard;
