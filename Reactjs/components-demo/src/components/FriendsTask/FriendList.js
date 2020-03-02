import React from 'react';
import { Link } from 'react-router-dom';
import './FriendList.css';

const FriendList = (props) => {
  return(
    <ul>
    {
      props.friends.map(friend => {
        return <li key={friend.id}>
         <Link className="link" to={`/profile/${friend.id}`}> {friend.name} </Link>
         </li>
      })
    }
    </ul>
  );
}

export default FriendList; 
