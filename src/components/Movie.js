import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Link�� ����Ͽ� ���ΰ�ħ ���� ������ �̵�

function Movie({ coverImg, title, rating, summary, genres }) {
    return (
        <div>
            <div>
                <img src={coverImg} alt={title} />
                <h2>
                    <Link to="/movie">{title} {rating}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
                    {genres.map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;