import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);  
  return (
    <div className="bg-black py-10 pl-12">
        <div className="-mt-52 relative z-20">
           <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
           <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
           <MovieList title={"Popular"} movies={movies.popularMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer