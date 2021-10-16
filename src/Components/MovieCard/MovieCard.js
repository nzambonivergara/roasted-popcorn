import React from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, title, ratings, id, selectMovie }) => {
  return (
    <article id={id} onClick={() => selectMovie(id)}>
      <img src={poster} alt={`${title} poster`} />
      <h3 className="card-title">{title}</h3>
      <p className="card-rating">Rating: {ratings}</p>
    </article>
  );
};

export default MovieCard;
