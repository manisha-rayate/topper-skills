import React from 'react';
import { useParams } from 'react-router-dom';

const Friend = (props) => {

  const { id } = useParams();
  console.log("ID:", id );
  
  const friend = props.getFriend(id);

  return ( 
    <>
      <img src={`/assets/Images${friend.avatar}`} />
      <h1> {friend.name} </h1>
      <hr />
      Name: <h2> {friend.name} </h2>
      Mobile: <h2> {friend.mobile} </h2>
      Email: <h2> {friend.email} </h2>
      Age: <h2> {friend.age} </h2>
      Gender: <h2> {friend.gender} </h2>
    </>
   );
}
 
export default Friend;