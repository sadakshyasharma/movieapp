import { useEffect } from "react";
import "./App.css";

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=b2fab97c";

const Apps = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s{title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return <div>app</div>;
};

export default Apps;
