import React, {useEffect} from 'react'

const DisplayPokemon = (props) => {
  return (
    <div>
      {props.pokemon.map((item, index) => {
        console.log(item.url)
        return <div key={index}>
          {item.name}
        </div>
      })}
    </div>
  )
}

export default DisplayPokemon;