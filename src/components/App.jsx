import React, { useState, useEffect } from 'react'
import axios from 'axios'

// these will render conditionally depending on URL
import FriendsList from './FriendsList'
import Friend from './Friend'

import { baseURL } from '../constants'

export default function App() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/friends`)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        debugger
        console.log(err)
      })
  }, [])

  return (
    <div className='container'>
      <header><h1>Friends App</h1><a href='/'>Home</a></header>

      <FriendsList friends={friends} />

      <Friend />
    </div>
  )
}
