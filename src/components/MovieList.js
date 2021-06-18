import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieList = (props) => {
  const { movies } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {
        movies.map((movie) => (
          <Movie key={movie.id} image={movie.poster_path} />
        ))

  }
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};
export default MovieList;
