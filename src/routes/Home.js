import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    // yts.mx API top 20 영화 리스트
    const getMovies = async () => {
        const res = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?sort_by=like_count`
            )
        ).json();
        setMovies(res.data.movies);
        setLoading(false);
    }

    return (
        <div>
            <SearchBar
                getMovies={getMovies}
            />
            {loading ? (
                <div className={styles.container}>
                    <div className={styles.dim}></div>
                    <div className={styles.circle}></div>
                </div>
            ) : (
                <>
                    <div className={styles.container}>
                        <h1>TOP {movies.length}</h1>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.movies}>
                            {movies.map((movie) => (
                                <Movies
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    coverImg={movie.medium_cover_image}
                                    title={movie.title}
                                    rating={movie.rating}
                                    summary={movie.summary}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;