import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const res = await (
                await fetch(
                    `https://yts.mx/api/v2/list_movies.json?sort_by=like_count`
                )
            ).json();
            setMovie(res.data.movies);
            setLoading(false);
        }
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
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
            )}
        </div>
    );
}

export default Home;