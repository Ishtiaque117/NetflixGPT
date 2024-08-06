import React from 'react'
import MovieSearchWithGpt from './MovieSearchWithGpt'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute inset-0 -z-10'>
        <img 
          src={BG_IMG_URL} 
          alt="Background" 
          className="w-full h-full object-cover " 
    />
        </div>
        <MovieSearchWithGpt />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch