import React from 'react';
import {Switch, Route } from "react-router-dom";
import CommentsPage from '../screens/CommentsPage/CommentsPage';
import FeedPage from '../screens/FeedPage/FeedPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import SingUpPage from '../screens/SingUpPage/SingUpPage';

const Routes = () => {
    return ( 
        <Switch>
          <Route exact path="/">
            <FeedPage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/cadastre-se">
           <SingUpPage/>
          </Route>
          <Route exact path="/comentarios/:id">
            <CommentsPage/>
          </Route>
          <Route>
            <CommentsPage/>
          </Route>
        </Switch>
     );
}
 
export default Routes;