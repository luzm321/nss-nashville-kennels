import React from "react";
import { UserWelcome } from './UserWelcome.js';
import "./Home.css";


export const Home = () => (
    <>
        <div className="home_div">
            <h2 className="header">Nashville Kennels</h2>
            <small className="slogan">Loving care when you're not there.</small>

            <address className="directions">
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>

            <UserWelcome yourName={"Luz Angelique"} />
        </div>
    </>
)