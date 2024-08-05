import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  return (
    <div>
          <div className='p-4'>
             <h1 className='text-2xl font-bold mb-4 text-white'>{title}</h1>
             <div className='flex overflow-x-scroll space-x-4 p-2'>
                {movies && movies.length > 0 ? (
                   movies.map(movie => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} 
            />
          ))
        ) : (
          <p>No movies available</p> 
        )}
      </div>
          </div>   
        
    </div>
  )
}

export default MovieList