/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const { image } = props;
  const baseImgUrl = 'https://image.tmdb.org/t/p';
  const size = 'w185';
  const defaultImg = 'kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div
          className="
            card-image
            waves-effect
            waves-block
            waves-light"
        >
          {
              image == null
                ? (
                  <img
                    src={`${baseImgUrl}/${size}/${defaultImg}`}
                    alt=""
                    style={
                      {
                        width: '100%',
                        height: 360,
                      }
}
                  />
                ) : (
                  <img
                    src={`${baseImgUrl}/${size}${image}`}
                    alt=""
                    style={
                      {
                        width: '100%',
                        height: 360,
                      }
}
                  />
                )
            }
        </div>
        <div className="card-content">
          <p>
            <a
              href="#"
              onClick={() => props.viewMovieInfo(props.movieId)}
            >
              View Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

Movie.defaultProps = {
  image: 'https://image.tmdb.org/t/p/w185',
};

Movie.propTypes = {
  image: PropTypes.string,
};
export default Movie;
