import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Berry = (props) => {
  const {name} = props.match.params
  const [berry, updateBerries] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/berry/${name}`)
    .then((res) => {
      updateBerries(res.data)
    })
  }, [name])

  return (
    <div>
      <h1>{berry.name}</h1>
    </div>
  )
}

export default Berry;