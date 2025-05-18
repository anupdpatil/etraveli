import React, { useState, useEffect } from "react";
import { movies } from "./moviesData";
import MovieDetails from "./MovieDetails";
import StarRating from "./StarRating";

function MovieList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("title");
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(" https://swapi.dev/api/films/?format=json.")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network error");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMovies(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortCriteria === "title") {
      return b.title - a.title;
    } else if (sortCriteria === "releaseYear") {
      return b.releaseYear - a.releaseYear;
    }
    return 0;
  });

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  // if (loading) {
  //   return <div>Loading movies...</div>;
  // }

  // if (error) {
  //   <div>Error fetching movies: {error}</div>;
  // }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial",
        transition: "all 0.5s ease",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flexBasis: selectedMovie ? "65%" : "99%",
          padding: "20px",
          boxSizing: "border-box",
          transition: "all 0.5s ease",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <select
              id="sort"
              value={sortCriteria}
              onChange={handleSortChange}
              style={{ padding: "11px", fontSize: "14px" }}
            >
              <option value="title">Title (A-Z)</option>
              <option value="releaseYear">releaseYear (new-old)</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: "10px",
              width: "88%",
              fontSize: "16px",
              marginBottom: "20px",
            }}
          />
        </div>
        {sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
                width: "99%",
                padding: "10px",
                border: "1px solid #ccc",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e0e0e0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f9f9f9")
              }
            >
              <span style={{ flex: 1, width: "20%", textAlign: "left" }}>
                {movie.id}
              </span>
              <span style={{ flex: 1, width: "60%", textAlign: "left" }}>
                {movie.title}
              </span>

              <span style={{ flex: 1, width: "20%", textAlign: "center" }}>
                <StarRating rating={movie.rating} />
              </span>
              <span style={{ flex: 1, width: "20%", textAlign: "center" }}>
                {movie.releaseYear}
              </span>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>

      {selectedMovie && (
        <MovieDetails selectedMovie={selectedMovie} handleClose={handleClose} />
      )}

      <style>
        {`
          /* Optional: animate flex basis change smoothly */
          div > div {
            transition: flex-basis 0.5s ease;
          }
        `}
      </style>
    </div>
  );
}

export default MovieList;
