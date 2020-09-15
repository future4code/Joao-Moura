import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from '../screen/HomePage/HomePage.jsx'
import DetailTripPage from '../screen/DetailTripPage/DetailTripPage'
import FormUserPage from '../screen/FormUserPage/FormUserPage'

import DashBordPage from "../screen/DashBordPage/DashBordPage";
import LoginPage from '../screen/LoginPage/LoginPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>

        <Route exact path="/home/detail">
          <DetailTripPage/>
        </Route>

        <Route exact path="/home/detail/form">
          <FormUserPage/>
        </Route>

        <Route exact path="/dashbord">
            <DashBordPage/>
        </Route>

        <Route exact path="/login">
            <LoginPage/>
        </Route>

        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
