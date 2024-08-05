import { IMG_CDN } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="flex-shrink-0 h-52 m-2">
        <img alt="Movie Card"
         src={IMG_CDN + posterPath}
         className="w-full h-full object-cover rounded-md"
        />
    </div>
  )
}

export default MovieCard