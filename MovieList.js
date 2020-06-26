import React, {useState, useContext} from 'react';
import { render } from 'react-dom';
import {MovieContext} from './MovieContext'
import Movie from './Movie'


const MovieList = () => {

  const [movies] = useContext(MovieContext)
  

  return movies.map((item) => <Movie item={item} />)
  
}

export default MovieList