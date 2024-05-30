import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useDebounce } from "../../hooks/useDebounce";
import "./SearchPage.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
    }
  };

  return (
    <section className="search-container">
      {searchResults.length > 0 ? (
        searchResults
          .filter(
            (movie) =>
              movie.backdrop_path !== null && movie.media_type !== "person"
          )
          .map((movie) => {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            return (
              <div className="movie" key={movie.id}>
                <div
                  className="movie__column-poster"
                  onClick={() => navigate(`/${movie.id}`)}
                >
                  <img
                    src={movieImageUrl}
                    alt={movie.title || "movie"}
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          })
      ) : (
        <section className="no-results">
          <div className="no-results__text">
            <p>찾고자하는 검색어 "{searchTerm}" 에 맞는 영화가 없습니다.</p>
          </div>
        </section>
      )}
    </section>
  );
};

export default SearchPage;
