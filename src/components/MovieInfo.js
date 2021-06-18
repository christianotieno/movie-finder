/* eslint-disable */
import React from 'react';

const MovieInfo = (props) => (
  <div className="container">
    <div
      className="row"
      onClick={props.closeMovieInfo}
      style={
        {
          cursor: 'pointer',
          paddingTop: 50,
        }
}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <i className="material-icons">arrow_back</i>
        <span style={{ marginLeft: 10 }}>Go back</span>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4">
        {props.currentMovie.poster_path == null
          ? (
            <img
              src="https://image.tmdb.org/t/p/w185/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
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
              src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt=""
              style={
                {
                  width: '100%',
                  height: 360,
                }
}
            />
          )}
      </div>
      <div className="col s12 m8">
        <div className="info-container">
          <p>
            <b>{props.currentMovie.title}</b>
          </p>
          <p>
            {
            props.currentMovie.release_date.substring(5).split('-').concat(props.currentMovie.release_date.substring(0, 4)).join('/')
}
          </p>
          <p>{props.currentMovie.overview}</p>
        </div>
      </div>
    </div>
  </div>
);

export default MovieInfo;
