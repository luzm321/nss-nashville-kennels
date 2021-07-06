//This component (router) defines all of the URLs the application will support and which views will be displayed for each one.
//ApplicationViews defines how the app will respond when the URL matches in the to attributes in each Link component from the NavBar component. 
//When a user clicks on one of the hyperlinks in the navigation bar, the code from this component dictates which component should be rendered.

import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard.js"
import { EmployeeCard } from "./employee/Employee.js";
import { LocationCard } from "./location/Location.js";
import { CustomerCard } from "./customer/Customer.js";

//exact is needed on the first route for Home, otherwise it will also match the other routes, and the Home will render for every route.
//The <Link/> and the <Route/> JSX elements are complementary to each other. If a new Link element is added in the app on the NavBar component
// with a new URL, then a matching Route element must be created in this component.

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animal">
                <AnimalCard />
            </Route>

            <Route path="/employee">
                <EmployeeCard />
            </Route>

            <Route path="/location">
                <LocationCard />
            </Route>

            <Route path="/customer">
                <CustomerCard />
            </Route>
        </>
    )
}

