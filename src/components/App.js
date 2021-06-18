import React, { useState } from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies([...movies, { movies: data.results }]);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} />
      <MovieList movies={movies} />
    </div>
  );
};
export default App;
