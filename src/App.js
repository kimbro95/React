import { useState, useEffect } from "react";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?sort_by=like_count`
        )
      ).json();
      setMovies(res.data.movies);
      setLoading(false);
    }
    getMovies();
  }, []);

  return (
    <div>
      {
        loading
          ? <h2>Loading...</h2>
          :
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
      }
    </div>
  );
}

export default App;