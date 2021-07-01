import './App.css';
import { createContext } from 'react';
import { useState } from 'react';
import Home from './Layouts/Home/Home';
import Dashboard from './Layouts/Dashboard/Dashboard';
import Login from './Layouts/Login/Login';
import PrivateRoute from './Layouts/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log(loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <p>{loggedInUser.email}</p> */}
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
