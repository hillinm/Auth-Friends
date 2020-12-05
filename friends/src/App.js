import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";
import Login from "./components/Login";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {credentials: {} };
  }
  render() {
  return (
    <Router>
      <Link to="/friendlist">Friends List</Link>
      <Link to="/addfriend">Add Friend</Link>
      <Link to="/login">LOGIN</Link>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
        <PrivateRoute exact path="/friendlist" component={FriendList} />
      </Switch>
    </Router>
  );
}
}

export default App;
