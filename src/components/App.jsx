import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

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
      })
  }, [])

  return (
    <div className='container'>
      <header><h1>Friends App</h1> <Route path='/friends'><Link to='/'>Home</Link></Route></header>
      <Switch>
        <Route path='/friends/:id'>
          <Friend />
        </Route>

        <Route path='/'>
          <FriendsList friends={friends} />
        </Route>
      </Switch>
    </div>
  )
}
