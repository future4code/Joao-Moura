import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from '../screen/HomePage/HomePage.jsx'
import FormUserPage from '../screen/FormUserPage/FormUserPage'

import DashBordPage from "../screen/DashBordPage/DashBordPage";
import LoginPage from '../screen/LoginPage/LoginPage'
import FormDashBord from "../screen/FormDashBord/FormDashBord.jsx";
import HeaderDashBord from "../components/HeaderDashBord/HeaderDashBord"
import HeaderUser from "../components/HeaderUser/HeaderUser.jsx";
import TripDetails from "../screen/TripDetails/TripDetails.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
   
      <Switch>
        <Route exact path="/">
            <HeaderUser/>
            <HomePage/>
        </Route>

        <Route exact path="/form">
          <HeaderUser/>
          <h2>Cadastro</h2>
          <FormUserPage/>
        </Route>

        <Route exact path="/login">
            <LoginPage/>
        </Route>

        <Route exact path="/dashbord">
            <HeaderDashBord/>
            <DashBordPage/>
        </Route>

        <Route exact path="/dashbord/detalhes/:id">
          <HeaderDashBord/>
          <TripDetails/>
        </Route>

        <Route exact path="/dashbord/form">
          <HeaderDashBord/>
          <FormDashBord/>
        </Route>
        
        <Route>
          <h1>Erro 404: A Página Não existe</h1>
        </Route>

      </Switch>
    </BrowserRouter>

  );
};

export default Routes;
