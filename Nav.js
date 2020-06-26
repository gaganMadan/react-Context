import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = (props) => {
  const [movies] = useContext(MovieContext)
  return (
    <div>
      <span> No of Movies {movies.length}</span>
    </div>
  )
}

export default Nav