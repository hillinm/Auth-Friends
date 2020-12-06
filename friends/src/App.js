import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";
import Login from "./components/Login";

import './App.css';

function App () {
  const logout = () => {
    localStorage.removeItem('token')
  }

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
          <Link to="/friendlist">Friends List</Link>
          </li>
          <li>
          <Link to="/addfriend">Add Friend</Link>
          </li>
          <li>
          <Link to="/login">LOGIN</Link>
          </li>
          <li>
          <Link onClick={logout}>LOGOUT</Link>
          </li>
        </ul>
      <Switch>
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
        <PrivateRoute exact path="/friendlist" component={FriendList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
