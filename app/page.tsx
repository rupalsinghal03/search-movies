"use client"
import movies from './dashboard/app.json'
import Link from "next/link";
import { useState } from "react";
interface Movie {
  id: number;
  image: string;
  title: string;
  release_date: string;
  overview: string;
}

interface layoutprops {
  children: React.ReactNode
}
const Home: React.FC<layoutprops> = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showMovies, setShowMovies] = useState<boolean>(true)
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  // Function to handle search
  const handleSearch = () => {
    setShowMovies(false)
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  const routeViewDetails = () => {
    { props.children }
  }
  return (
    <>
      <div className="container pt-2">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Movie Search</h1>
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label fw-bold">Enter Movie Name</label>
                <input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Movie Name"
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-12">
              {showMovies ?
                <>
                  {movies.map(movie => (
                    <div className="card align-items-center mb-3 bg-transparent">
                      <div className="card-body">
                        <div key={movie.id}>
                          <img src={movie.image} alt={movie.title} />
                          <div className="inner_content">
                            <h2>{movie.title}</h2>
                            <p>Release Date: {movie.release_date}</p>
                            <p>{movie.overview}</p>
                          </div>
                          <Link href={`/ViewDetails/${movie.id}`} passHref>
                            <button className="btn btn-primary" onClick={() => routeViewDetails()}>View more</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </> : <>
                  {searchResults.map(movie => (
                    <div className="card align-items-center mb-3 bg-transparent" key={movie.id}>
                      <div className="card-body">
                        <img src={movie.image} alt={movie.title} />
                        <div className="inner_content">
                          <h2>{movie.title}</h2>
                          <p>Release Date: {movie.release_date}</p>
                          <p>{movie.overview}</p>
                        </div>
                        {/* <Link href={`/movie/${movie.id}`}>
                          View more
                        </Link> */}
                      </div>
                    </div>
                  ))}
                </>}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home