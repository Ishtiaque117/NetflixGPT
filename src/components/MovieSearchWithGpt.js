import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const MovieSearchWithGpt = () => {

    const langKey = useSelector(store => store.config.lang);
    return (
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black flex items-center">
          <input
            type="text"
            className="p-3 m-3 flex-grow"
            placeholder= {lang[langKey].gptSearchPlaceholder}
          />
          <button className="m-3 py-2 px-4 bg-red-700 text-white rounded-lg">
             {lang[langKey].search}
          </button>
        </form>
      </div>
    )
  }
  
  export default MovieSearchWithGpt;