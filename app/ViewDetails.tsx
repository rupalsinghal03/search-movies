// ViewDetails.tsx
import { useRouter } from 'next/router';
import movies from './dashboard/app.json';

interface Movie {
    id: number;
    image: string;
    title: string;
    release_date: string;
    overview: string;
}

const ViewDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the movie with the given ID
    const movie = movies.find((movie: Movie) => movie.id === parseInt(id as string));

    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} />
            <p>Release Date: {movie.release_date}</p>
            <p>{movie.overview}</p>
        </div>
    );
};

export default ViewDetails;
