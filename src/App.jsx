import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";
import "./App.css";

export default function App() {
  const apiKey = "98e3fb1f";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`,
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const movies = [
      "Clueless",
      "Titanic",
      "Inception",
      "Avatar",
      "Jaws",
      "Rocky",
      "The Matrix",
      "Frozen",
      "Interstellar",
      "Gladiator",
    ];

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    getMovie(randomMovie);
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
