import React, { useState, useEffect } from 'react'
// STEP 2 - import Route, Switch and Link from react router
import { Route, Switch, Link } from 'react-router-dom'

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
      <header><h1>Friends App</h1><Route path='/friends/:id'><a href='/'>Home</a></Route></header>
      {/* STEP 3 WRAP COMPONENTS IN ROUTES */}
      {/* the path props is what needs to 'match' in the url in order to render */}
      <Switch>
        {/* the switch makes it so that only first route encountered inside renders */}
        <Route path='/friends/:id'>
          <Friend />
        </Route>

        {/* put the least specific path at the end of the switch */}
        <Route path='/'>
          <FriendsList friends={friends} />
        </Route>
      </Switch>
    </div>
  )
}
