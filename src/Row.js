import React, { useEffect, useState } from "react";
import "./Row.css";
import instance from "./constant";
// import MovieDetailsPage from "./MovieDetailsPage";
import { useNavigate } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="row">
      {title}
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => handleMovieClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
