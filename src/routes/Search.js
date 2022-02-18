import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";
import styles from "./Search.module.css";

function Search(props) {
    const { keyword } = useParams(); // URL에 있는 파라미터 값을 받을 수 있다. ex. {id: '123'}
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const getLoading = () => {

    }

    // yts.mx API 검색값 & 좋아요 순 리스트
    const getSearchMovie = async () => {
        const res = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&query_term=${keyword}`
            )
        ).json();
        if (res.data.movie_count > 0) {
            setMovies(res.data.movies);
        } else {
            setMovies([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (keyword !== "") {
            getSearchMovie();
        }
    }, [keyword]);

    return (
        <div>
            <SearchBar
                getLoaing={getLoading}
            />
            {loading ? (
                <div className={styles.container}>
                    <div className={styles.dim}></div>
                    <div className={styles.circle}></div>
                </div>
            ) : (
                movies.length > 0 ?
                    (
                        <>
                            <div className={styles.container}>
                                <h1>{keyword}</h1>
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
                    )
                    :
                    (<div className={styles.container}>
                        <h1>NO RESULT :(</h1>
                    </div>
                    )
            )}
        </div >
    );
}

Search.prppTypes = {
    keyword: PropTypes.string.isRquired,
}

export default Search;