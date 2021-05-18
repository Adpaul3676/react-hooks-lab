import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const BerryList = (props) => {
  const [berries, updateBerries] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/berry')
    .then((res) => {
      updateBerries(res.data.results)
    })
  }, [])

  return (
    <div>
      {berries.map((berry) => {
        return (
          <Link key={berry.url} to={`/berry/${berry.name}`}>
            <h2>{berry.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}

export default BerryList;