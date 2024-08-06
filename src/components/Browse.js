import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';



const Browse = () => {

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    
  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className='flex flex-col'>
        <Header />
        {showGptSearch ? (
            <GptSearch />
        ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
        )}
        
        
    </div>
  )
}

export default Browse