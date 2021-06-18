import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const { image } = props;
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
                    src="https://images.unsplash.com/photo-1611173543358-10cb5d0f9ca3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    style={{ width: '100%', height: 360 }}
                  />
                ) : (
                  <img
                    src={`http://image.tmdb.org/t/p/w185${image}`}
                    alt=""
                    style={{ width: '100%', height: 360 }}
                  />
                )
            }
        </div>
        <div className="card-content">
          <p><a href="www.google.com"> View details</a></p>
        </div>
      </div>
    </div>
  );
};

Movie.defaultProps = {
  image: '',
};

Movie.propTypes = {
  image: PropTypes.string,
};
export default Movie;
