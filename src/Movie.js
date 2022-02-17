import PropTypes from 'prop-types';

function Movie({ coverImg, title, rating, summary, genres }) {
    return (
        <div>
            <div>
                <img src={coverImg} alt={title} />
                <h2>{title} {rating}</h2>
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