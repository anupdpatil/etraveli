const StarRating = ({ rating, maxStars = 10 }) => {
  const filledStars = Math.round(rating);
  const emptyStars = maxStars - filledStars;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array(filledStars)
        .fill()
        .map((_, index) => (
          <span
            key={`star-full-${index}`}
            style={{ color: "#FFD700", fontSize: "16px" }}
          >
            ★
          </span>
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span
            key={`star-empty-${index}`}
            style={{ color: "#ccc", fontSize: "16px" }}
          >
            ★
          </span>
        ))}
    </div>
  );
};
export default StarRating;
