import React, {useState, createContext} from 'react'


export const MovieContext = createContext();

export const MovieProvider = (props) => {

  const [movies, setMovies] = useState([
    {
      name : 'Firsr Movie',
      prise : '2000',
      id : '1'
    },
    {
      name : 'Second Movie',
      prise : '1000',
       id : '2'
    },
    {
      name : 'Star Movie',
      prise : '5000',
       id : '3'
    },
    {
      name : 'Forth Movie',
      prise : '5000',
       id : '4'
    }
  ])


  return (
    <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MovieContext.Provider>
  )
}

