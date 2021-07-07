import React from "react"
import "./Location.css"

export const LocationCard = ({locationName, locationAddress}) => (
    <section className="location">
        <h3 className="location__name">{locationName}</h3>
        <div className="location__location">{locationAddress}</div>
    </section>
)