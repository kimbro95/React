import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // URL에 있는 파라미터 값을 받을 수 있다.

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
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.large_cover_image} alt={movie.title} />
                    <hr />

                    <h1>{movie.title_long}</h1>
                    <h3>Rating: {movie.rating} / Runtime: {movie.runtime}m</h3>
                    <ul>
                        {movie.genres.map((g) => (
                            <li key={g}><h5>{g}</h5></li>
                        ))}
                    </ul>
                    <hr />

                    <h3>Description</h3>
                    <p>{movie.description_full}</p>
                </div>
            )
            }
        </div>
    );
}

export default Detail;