// import { useLocation } from "react-router-dom";
// import ReactPlayer from "react-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VidoeSection from "../components/VidoeSection";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState("");
  const [videoKey, setVideoKey] = useState();

  const { id } = useParams();
  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = movieDetails;
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div className="text-center container">
      <h2 className="text-danger mt-3 mb-3">{title}</h2>
      <VidoeSection videoKey={videoKey} />
      <div>
        <img
          className="w-50"
          src={poster_path ? baseImageUrl + poster_path : defaultImage}
          alt="poster"
        />
      </div>
      <div className="container mt-3">
        <p>{overview}</p>
        <table class="table ">
          <tbody>
            <tr>
              <td colspan="2" class="table-active">
                {"Release Date:" + release_date}
              </td>
            </tr>
            <tr>
              <td colspan="2" class="table-active">
                {"Rate:" + vote_average}
              </td>
            </tr>
            <tr>
              <td colspan="2" class="table-active">
                {"Total Vote:" + vote_count}
              </td>
            </tr>
            <tr>
              <td colspan="2" class="table-active">
                <Link to={-1}> Go Back</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieDetail;
