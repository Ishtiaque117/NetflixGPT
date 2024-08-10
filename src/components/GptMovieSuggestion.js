import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {

  const {gptMovieResults, gptMovieNames } = useSelector(store => store.gpt);

  if(!gptMovieNames) return null;

  return (
    <div>
      <div className="bg-black pl-6 mt-10 ml-2 mb-12 bg-opacity-80">
        {gptMovieNames.map((movieName,index) => (
          <MovieList 
            key={movieName}
            title={movieName}
            movies={gptMovieResults[index]}  
          />
        ))}
      </div>
        
    </div>
  )
}

export default GptMovieSuggestion