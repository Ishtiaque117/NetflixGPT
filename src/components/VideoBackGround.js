import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackGround = ({movieId}) => {
 
  const trailerVideo = useSelector(store => store.movies?.trailerVideo) ;
  
  useMovieTrailer(movieId);
  
  return (
    <div className="w-screen">
      {trailerVideo && trailerVideo.length > 0 ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo[0]?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo[0]?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <p>Loading trailer...</p> // You can replace this with a loader or any placeholder
      )}
    </div>
  )
}

export default VideoBackGround