import React from 'react'
import { Link } from 'react-router-dom'

function FriendsList(props) {
  if (!props.friends.length) {
    return <h3>Working fetching your friends...</h3>
  }
  return (
    <div className='friends-list container'>
      {
        props.friends.map(friend => {
          return (
            <div key={friend.id}>🔥 {friend.name} <Link to={`/friends/${friend.id}`}>details</Link></div>
          )
        })
      }
    </div>
  )
}

export default FriendsList
