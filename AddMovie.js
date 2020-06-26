import React, {useContext, useState} from 'react'
import {MovieContext} from './MovieContext'

const AddMovie = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const [movies,setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateCost = (e) => {
        setCost(e.target.value)
    }

    const updateMovies = (e) => {
      e.preventDefault();
      setMovies(prevMovies => [...prevMovies, {name:name, prise: cost}])
    }


    return (
      <form onSubmit={updateMovies}>
          <span>Please Enter the movie Name : <input type="text" placeholder="Enter the Movie Name" value={name} onChange={updateName} /></span>
          <br />
          <span>Please Enter the movie Cost : <input type="text" placeholder="Enter the Movie Cost" value={cost} onChange={updateCost}/></span>
          <button>Submit</button>

      </form>
    )
}

export default AddMovie