import React from "react";
import StarRating from "./StarRating";
function MovieDetails({ selectedMovie, handleClose }) {
  return (
    <div
      style={{
        flexBasis: "35%",
        padding: "20px",
        boxSizing: "border-box",
        borderLeft: "2px solid #ccc",
        overflowY: "auto",
        backgroundColor: "#fff",
        opacity: 0,
        animation: "fadeIn 0.5s forwards",
      }}
    >
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 1,
        }}
        title="Close Details"
      >
        &times;
      </button>

      <div style={{ marginTop: "50px", textAlign: "left" }}>
        <h3>{selectedMovie.title}</h3>
        <img
          src={selectedMovie.imageUrl}
          alt={selectedMovie.title}
          style={{ width: "200px", borderRadius: "8px", marginBottom: "20px" }}
        />
        <p>{selectedMovie.description}</p>
        <p>Directed by: {selectedMovie.director}</p>
        <p>
          <StarRating rating={selectedMovie.rating} />
        </p>
      </div>
      <style>
        {`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
              }
            `}
      </style>
    </div>
  );
}

export default MovieDetails;
