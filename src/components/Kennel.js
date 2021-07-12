//Kennel is a container component. It renders no HTML itself. It simply contains other components that are responsible for the presentation
// and behavior of the application. This Kennel component contains two different kinds of child components which are NavBar and ApplicationViews: 
//NavBar: This is a Presentation Component. Directly expresses HTML.
//ApplicationViews: A Controller/Router Component whose only responsibility is to control the behavior of the system and maps URLs to components.


import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews.js";
import { NavBar } from "./nav/NavBar.js";
import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";
import "./Kennel.css";

export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);


// Here's the process that this code follows.

// When the application first renders, it checks for a kennel_customer item in local storage.
// If the item is there, the user is authenticated and the application renders.
// If the item is not there, render the Login form instead.
// When the user fills out the form and clicks the submit button, query the API to see if a user with the specified email already exists.
// If the user already exists, set the kennel_customer item in local storage, and display the Dashboard.
// If the user does not exist, alert that fact to the user.