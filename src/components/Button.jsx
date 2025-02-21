import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: colors[colorIndex],
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "36px",
        }}
      >
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
