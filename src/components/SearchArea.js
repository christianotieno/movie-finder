import React from 'react';
import PropTypes from 'prop-types';

const SearchArea = (props) => {
  const { handleSubmit, handleChange } = props;
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-field">
              <input placeholder="Search movie" type="text" onChange={handleChange} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

SearchArea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchArea;
