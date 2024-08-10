import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovie } from "../utils/gptSlice";

const MovieSearchWithGpt = () => {

    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' 
            + movie + '&include_adult=false&language=en-US&page=1',
            API_OPTIONS);
        const json = await data.json();
        
        return json.results;
    }

    const handleGptSearchMovies = async() => {
       const gptQuery = 
       "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 10 movies, comma sepated like the example result given ahead. Example Result : PK,Don,Sholay,Golmaal,Koi Mil Gaya,";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          
          if(!gptResults.choices) {
            return;
          }

           const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

           console.log(gptMovies);

           const data = gptMovies.map((movie) => searchMovieTMDB(movie));

            const tmdbResults = await Promise.all(data);

            dispatch(addGptMovie({gptMovieNames: gptMovies, gptMovieResults: tmdbResults}));
    }

    return (
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black flex items-center"
         onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            type="text"
            className="p-3 m-3 flex-grow"
            placeholder= {lang[langKey].gptSearchPlaceholder}
          />
          <button className="m-3 py-2 px-4 bg-red-700 text-white rounded-lg"
           onClick={handleGptSearchMovies}>
             {lang[langKey].search}
          </button>
        </form>
      </div>
    )
  }
  
  export default MovieSearchWithGpt;