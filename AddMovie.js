import React, {useContext, useState} from 'react'
import {MovieContext} from './MovieContext'
import axios from 'axios'

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
      const obj = {email:email, first_name: firstName, last_name: lastName};
      axios.post('https://reqres.in/api/users',obj)
        .then((response) => {
           setMovies(prevMovies => [...prevMovies, obj])
           setEmail('')
           setFirstname('')
           setLastname('')
        }, (error) => {
            console.log(error)
        })
     
    }


    return (
      <form onSubmit={updateMovies}>
          <span>Please Enter the Email Name : <input type="text" placeholder="Enter the Email" id="email" value={email} onChange={updateEmail} /></span>
          <br />
          <span>Please Enter the First Name : <input type="text" placeholder="Enter the Movie Cost" id="firstName" value={firstName} onChange={updateFirstname}/></span>
          <br />
          <span>Please Enter the Last Name : <input type="text" placeholder="Enter the Last Name"  id="lastName" value={lastName} onChange={updateLastname}/></span>
          <button>Submit</button>

      </form>
    )
}

export default AddMovie