// import MovieCard from './MovieCard';

// const MovieList = ({title,movies}) => {
//   return (
//     <div>
//           <div className='p-4'>
//              <h1 className='text-2xl font-bold mb-4 text-white'>{title}</h1>
//              <div className='flex overflow-x-scroll space-x-4 p-2'>
//                 {movies && movies.length > 0 ? (
//                    movies.map(movie => (
//                     <MovieCard key={movie.id} posterPath={movie.poster_path} 
//             />
//           ))
//         ) : (
//           <p>No movies available</p> 
//         )}
//       </div>
//           </div>   
        
//     </div>
//   )
// }

// export default MovieList

import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieCardTrailer from "./MovieCardTrailer";

const MovieList = ({ title, movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handlePosterClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseTrailer = () => {
    setSelectedMovieId(null);
  };

  useEffect(() => {
    document.body.style.overflow = selectedMovieId ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedMovieId]);

  return (
    <div className="p-4 relative">
      <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll space-x-4 p-2">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              onClick={() => handlePosterClick(movie.id)}
            />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>

      {selectedMovieId && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            {/* ✕ Close Button */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold z-50"
              onClick={handleCloseTrailer}
            >
              ✕
            </button>

            {/* Trailer for selected movie */}
            <MovieCardTrailer movieId={selectedMovieId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;


