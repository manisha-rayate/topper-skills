import React from 'react';
import Friend from './Friend';
import FriendList from './FriendList';
import { Switch, Route } from 'react-router-dom';
import './FriendContainer.css';

const FriendContainer = () => {

  const friends = [
    { id: 1, name: "abc", email: "abc@gmail.com", mobile: "1111111111", age: 10, gender: "Male", avatar: "/cat.jpg"},
    { id: 2, name: "def", email: "def@gmail.com", mobile: "2222222222", age: 11, gender: "Female", avatar: "/cat.jpg" },
    { id: 3, name: "pqr", email: "pqr@gmail.com", mobile: "3333333333", age: 12, gender: "Male", avatar: "/cat.jpg" },
    { id: 4, name: "xyz", email: "xyz@gmail.com", mobile: "4444444444", age: 13, gender: "Female", avatar: "/cat.jpg" },
    { id: 5, name: "frd", email: "frd@gmail.com", mobile: "5555555555", age: 14, gender: "Male", avatar: "/cat.jpg" }
  ]

  function getFriend(id)
  {
    let friObj;
    friends.forEach(friend => {
        if(id == friend.obj)
        {
          friObj = friend;
        }
    })
    return friObj;
  }

  return(
    <>
      <div className="container">
        <div className="row">

          <div className="menu">
            <FriendList friends={friends} />
          </div>

          <div className="content">
            <Switch>
              <Route path="/profile/:id">
                <Friend getFriend={getFriend} />
              </Route>
            </Switch>
          </div>

        </div>
      </div>
    </>
  );
}

export default FriendContainer;