import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/posts/:postId'>
          <PostDetail></PostDetail>
        </Route>
        <Route exact path = '/'>
            <Home></Home>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
