import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from "./Dashboard";
import Registration from "./Reg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


class Header extends React.Component
{
  render()
  {
    return (
        <Router>
        <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/dashboard ">WebSiteName</a>
        </div>
          <ul class="nav navbar-nav">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
          </Switch>
        </div>
        </nav>
      </Router>
      
    )
  }
}
export default Header;