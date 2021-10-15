import React from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, title, ratings, id }) => {
  return (
    <article id={id}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>Rating: {ratings}</p>
    </article>
  );
};

export default MovieCard;
