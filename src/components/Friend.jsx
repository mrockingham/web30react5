import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { baseURL } from '../constants'

function Friend() {
  const [details, setDetails] = useState(null)
  const { id } = useParams()

  console.log(id, '<-------------- id FROM THE URL PARAMETER')

  useEffect(() => {
    // can we pull the :id param from the URL?
    axios.get(`${baseURL}/friends/${id}`)
      .then(res => {
        setDetails(res.data)
      })
      .catch(err => {
        debugger
      })
  },
    [id]
  )

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  return (
    <div className='friend container'>
      <h2>Details</h2>
      <p>{details.name} is {details.age}</p>
      <p>email is {details.email}</p>
      {name} likes:
      <ul>
        {
          details.likes.map((like, idx) => <li key={idx}>{like}</li>)
        }
      </ul>
    </div>
  )
}

export default Friend
