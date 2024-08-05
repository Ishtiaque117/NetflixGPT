const VideoTitle = ({title, overview}) => {
    return (
      <div className="w-screen aspect-video pt-44 px-16 absolute text-white bg-gradient-to-r from-black ">
        <h1 className="text-5xl font-bold font-serif">{title}</h1>
        <p className="py-6 text-lg w-2/5">{overview}</p>

        <div className="py-3">
            <button className="bg-white text-black p-4 px-14 text-lg font-bold rounded-lg"> Play</button>
            <button className="mx-2 bg-gray-500 text-white p-4 px-9 text-lg font-semibold rounded-lg">ⓘ More Info</button>
        </div>
      </div>
    )
  }
  
  export default VideoTitle;