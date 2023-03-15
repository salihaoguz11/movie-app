import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async (API) => {
    const { data } = await axios(API);
    setMovies(data.results);
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(`${SEARCH_URL}${search}`);
    setSearch("");
  };
  useEffect(() => {
    getData(BASE_URL);
  }, []);
  console.log(search);
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="m-4 ">
        <input
          type="text"
          className="w-50 p-1 me-2"
          placeholder="enter a movie name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="btn btn-warning">
          Search
        </button>
      </form>
      <div className="row d-flex justify-content-center">
        {movies.map((movie) => {
          return (
            <div className="col-12  col-sm-6 col-md-4 col-lg-3 card mb-4 ms-4">
              <MovieCard movie={movie} key={movie.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
