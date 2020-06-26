import React from 'react';
import { render } from 'react-dom';
import MovieList from './MovieList';
import Nav from './Nav'
import {MovieProvider} from './MovieContext'
import AddMovie from './AddMovie.js'

import './style.css';

const App = () => (
  <>
    <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
    </MovieProvider>
  </>
)

render(<App />, document.getElementById('root'));
