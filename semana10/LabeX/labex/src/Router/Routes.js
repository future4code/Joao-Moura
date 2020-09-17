import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from '../screen/HomePage/HomePage.jsx'
import TripPage from '../screen/TripPage/TripPage'
import FormUserPage from '../screen/FormUserPage/FormUserPage'

import DashBordPage from "../screen/DashBordPage/DashBordPage";
import LoginPage from '../screen/LoginPage/LoginPage'
import FormDashBord from "../screen/FormDashBord/FormDashBord.jsx";
import HeaderDashBord from "../components/HeaderDashBord/HeaderDashBord"

const Routes = () => {
  return (
   
      <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>

        <Route exact path="/form">
          <FormUserPage/>
        </Route>

        <Route exact path="/login">
            <LoginPage/>
        </Route>

        <Route exact path="/dashbord">
            <HeaderDashBord/>
            <DashBordPage/>
        </Route>

        <Route exact path="/dashbord/detail">
          <HeaderDashBord/>
          <TripPage/>
        </Route>

        <Route exact path="/dashbord/form">
          <HeaderDashBord/>
          <FormDashBord/>
        </Route>

      </Switch>
  );
};

export default Routes;
