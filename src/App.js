import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/friendsList'
import Form from './components/Form'

function App() {
  let [friends, setFriends] = useState([{
    name: '',
    email: '',
    role: ''
  }])
  return (
    <div className="App">
      <Form friends={friends} setFriends={setFriends}></Form>
      <FriendsList friends={friends}></FriendsList>
    </div>
  );
}

export default App;
