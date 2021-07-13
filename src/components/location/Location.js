import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";


export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/location/detail/${location.id}`}>
                {location.name}
            </Link>
        </h3>
    <div className="location__address">{location.address}</div>
    </section>
);



// import React from "react"
// import "./Location.css"

// export const LocationCard = ({ location }) => (
//     <section className="location">
//         <h3 className="location__name">{location.name}</h3>
//         <address className="location__location">Address: {location.address}</address>
//     </section>
// );



// export const LocationCard = ({locationName, locationAddress}) => (
//     <section className="location">
//         <h3 className="location__name">{locationName}</h3>
//         <div className="location__location">{locationAddress}</div>
//     </section>
// )