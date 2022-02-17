import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Link�� ����Ͽ� ���ΰ�ħ ���� ������ �̵�

function Movie(props) {
    return (
        <div>
            <div>
                <img src={props.coverImg} alt={props.title} />
                <h2>
                    <Link to={`/movie/${props.id}`}>{props.title} {props.rating}</Link>
                </h2>
                <p>{props.summary}</p>
                <ul>
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