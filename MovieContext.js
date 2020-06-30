import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'


export const MovieContext = createContext();

export const MovieProvider = (props) => {

  // const [movies, setMovies] = useState([
  //   {
  //     name : 'Firsr Movie',
  //     prise : '2000',
  //     id : '1'
  //   },
  //   {
  //     name : 'Second Movie',
  //     prise : '1000',
  //      id : '2'
  //   },
  //   {
  //     name : 'Star Movie',
  //     prise : '5000',
  //      id : '3'
  //   },
  //   {
  //     name : 'Forth Movie',
  //     prise : '5000',
  //      id : '4'
  //   }
  // ])

  const [movies, setMovies] = useState(['']);

  useEffect(() => {
      axios.get('https://reqres.in/api/users?page=2')
        .then((response) => {
          setMovies(response.data.data)
          //console.log(response.data.data)
        }, (error) => {
          console.log(error);
        })
  }, [])


  return (
    <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MovieContext.Provider>
  )
}

