import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieCardTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        setLoading(true); // start loading
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await response.json();
        console.log(data);

        const trailers = data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        setTrailerKey(trailers.length > 0 ? trailers[0].key : null);
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setTrailerKey(null);
      } finally {
        setLoading(false); // done loading
      }
    };

    fetchTrailer();
  }, [movieId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-white">Loading trailer...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {trailerKey ? (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <p className="text-white text-center">Trailer not available</p>
      )}
    </div>
  );
};

export default MovieCardTrailer;
