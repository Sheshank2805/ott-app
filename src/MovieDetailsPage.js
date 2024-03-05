import React, { useEffect, useState } from "react";
// import instance from "./constant";
import movieTrailer from "movie-trailer";
import { useLocation } from "react-router-dom";
import "./MovieDetails.css";
import Nav from "./Nav";

const baseUrl = "https://image.tmdb.org/t/p/original";

const MovieDetailsPage = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loadingTrailer, setLoadingTrailer] = useState(false);
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (
      location.state &&
      location.state.movie &&
      location.state.movie.genre_ids
    ) {
      setMovie(location.state.movie);
    } else {
      console.error("Invalid movie object in location state");
    }
  }, [location.state]);

  const handlePlayTrailer = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      setLoadingTrailer(true);
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          setLoadingTrailer(false);
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            setTrailerUrl("not_available");
            console.log("Trailer not available");
          }
        })
        .catch(() => {
          setLoadingTrailer(false);
          setTrailerUrl("not_available");
          alert("Temporary Unavailable");
        });
    }
  };

  return (
    <div className="movie-details-page">
      <div className="movie-details">
        <Nav />
        {movie && (
          <>
            <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.name || movie.title || movie.original_title}</h2>
            <h3>{movie.vote_average}</h3>
            <p>Year: {movie.first_air_date || movie.release_date}</p>
            <p>{movie.overview}</p>
            <button onClick={handlePlayTrailer}>
              {loadingTrailer ? "Loading Trailer..." : "Play Trailer"}
            </button>
          </>
        )}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} />} */}
      {trailerUrl !== "not_available" ? (
        <div className="trailer-container">
          <iframe
            title="YouTube Trailer"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerUrl}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>Trailer not available.</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
