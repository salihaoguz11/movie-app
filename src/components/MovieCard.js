import React from "react";
import { useNavigate } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, id } = movie;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/detail/" + id);
  };
  return (
    <div className="mb-4" onClick={handleClick}>
      <img
        className="card-img-top "
        src={IMG_URL + poster_path}
        alt="Card cap"
      />
      <h3 className="text-danger">{title}</h3>
      <div className="card-body">
        <div>
          <p className="card-text">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
