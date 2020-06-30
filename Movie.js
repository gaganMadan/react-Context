import React from 'react'

const Movie = ({item}) => {
  return (
    <>
      <h2>{item.email}</h2>
      
      <h2>{item.first_name} {item.last_name}</h2>
      <img src={item.avatar}/>
    </>
  )
}

export default Movie