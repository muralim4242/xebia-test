import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from '../components/Login';
import PrivateRoute from "./PrivateRoute";
import Search from "../components/Private/Search";

const base = "";

const Main = () => {
    return (
      <main>
        <Switch>
          <Route exact path={base+"/login"} component={Login} />
          <PrivateRoute exact path="/" component={Search} />
        </Switch>
      </main>
     )
   }

export default Main;
