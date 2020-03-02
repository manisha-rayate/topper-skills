/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Blank from 'layouts/Blank';
import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Blank} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);





// project--->Food ordering app

// users
// -admin
// -customer

// Activities:
// Dishes(Add,update,delete)
// Orders(placing,changing status)
// rating

// Entities
// -users
// -dishes
// -Orders

// Admin control panel:
// -dashboard
// -my Orders
// -profile
// -change password

// project architecture(folder structure)

// Featurewise:
//  hotel client
//  -public
//     -assets
//      -css
//      -images
//  -src
//    -api
//    -modules
//    -ui elements

//    index.js
//    app.js