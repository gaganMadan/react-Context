import React, {useContext, useState} from 'react'
import {MovieContext} from './MovieContext'

const AddMovie = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const [movies,setMovies] = useContext(MovieContext);

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updateFirstname = (e) => {
        setFirstname(e.target.value)
    }

    const updateLastname = (e) => {
        setLastname(e.target.value)
    }

    const updateMovies = (e) => {
      e.preventDefault();
      setMovies(prevMovies => [...prevMovies, {email:email, first_name: firstname, last_name: lastName}])
    }


    return (
      <form onSubmit={updateMovies}>
          <span>Please Enter the movie Name : <input type="text" placeholder="Enter the Email" value={email} onChange={updateEmail} /></span>
          <br />
          <span>Please Enter the First Name : <input type="text" placeholder="Enter the Movie Cost" value={firstName} onChange={updateFirstname}/></span>
          <br />
          <span>Please Enter the Last Name : <input type="text" placeholder="Enter the Last Name" value={lastName} onChange={updateLastname}/></span>
          <button>Submit</button>

      </form>
    )
}

export default AddMovie