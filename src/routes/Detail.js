import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // URL에 있는 파라미터 값을 받을 수 있다.
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams(); // URL에 있는 파라미터 값을 받을 수 있다. ex. {id: '123'}
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovie = async () => {
            const res = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(res.data.movie);
            setLoading(false);
        }
        getMovie();
    }, []);

    return (
        <div className={styles.container} style={{ background: `url(${movie.background_image_original})` }}>
            {
                loading ? (
                    <div className={styles.loader} >
                        <h1>Loading....</h1>
                    </div>
                ) : (
                    <div className={styles.movie}>
                        <img src={movie.large_cover_image} alt={movie.title} className={styles.movie__img} />
                        <div>
                            <h1 className={styles.movie__title}>
                                <strong>{movie.title} ({movie.year})</strong>
                            </h1>
                            <h3 className={styles.movie__rating}>
                                ⭐ <strong>{movie.rating}  </strong>
                            </h3>
                            Runtime - {movie.runtime} m
                            <ul className={styles.movie__genres}>
                                {movie.genres.map((value) => (
                                    <li key={value}>{value}&nbsp;</li>
                                ))}
                            </ul>
                            <hr />
                            <p>{movie.description_full}</p>
                        </div>
                    </div>
                )}
        </div >
    );
}

export default Detail;