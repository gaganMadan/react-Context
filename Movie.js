import React from 'react'

const Movie = ({item}) => {
  return (
    <>
      <h2>{item.name}</h2>
      
      <h2>{item.prise}</h2>
    </>
  )
}

export default Movie