import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider.js";
import { LocationCard } from "./Location.js";
import { useHistory } from 'react-router-dom';


export const LocationList = () => {
 
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations, Initial render before data")
    getLocations()

  }, [])

  const history = useHistory()

  return (
    <>
      <h2>Locations</h2>
        <button onClick={() => {history.push("/location/create")}}>
            New Location
        </button>

      <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
          locations.map(location => {
            return <LocationCard key={location.id} location={location} />
          })
        }
      </div>
    </>
  )
}