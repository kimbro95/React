import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Link를 사용하여 새로고침 없이 페이지 이동
import styles from "./Movie.module.css";

function Movie(props) {
    return (
        <div className={styles.movie}>
            <img src={props.coverImg} alt={props.title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${props.id}`}>{props.title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{props.year}</h3>
                <p>{props.summary.length > 235 ? `${props.summary.slice(0, 235)}...` : props.summary}</p>
                <ul className={styles.movie__genres}>
                    {props.genres.map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;