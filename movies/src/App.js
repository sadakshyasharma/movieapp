import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const api_url = " https://www.omdbapi.com/?i=tt3896198&apikey=b2fab97c";



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("movies");
   
  }, []);

  return (
    <div className="app">
      <h1> Movie World</h1>

      <div className="search">
        <input 
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="imagebutton"
          disabled={!Boolean(searchTerm.trim)}
          onClick={() => searchMovies(searchTerm)}
        >
          <img
            src="/search.png"
            alt="search"
            style={{ width: "50px", height: "45px" }}

            //disabled={!Boolean(searchTerm === null)? false :true}
          />
        </button>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
