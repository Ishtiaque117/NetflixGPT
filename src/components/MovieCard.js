import { IMG_CDN } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  
  if(!posterPath) return null;

  return (
    <div className="flex-shrink-0 h-52 m-2 ttransition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
        <img alt="Movie Card"
         src={IMG_CDN + posterPath}
         className="w-full h-full object-cover rounded-md"
        />
    </div>
  )
}

export default MovieCard