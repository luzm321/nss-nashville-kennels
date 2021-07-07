//The useContext hook allows you to use data structures and functions that a parent provider component exposes. First need to import the context 
//object (AnimalContext) created in the AnimalProvider component so that the Context hook can access the objects it exposes.



import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
  //In this case, it is the API call for the animals. The empty array bracket is the dependency array. After the return, useEffect is 
  //automatically invoked and since the dependency array is empty, it only runs the first time the component renders.
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()

  }, [])

  //Use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the AnimalCard component function.
  //The key and animal arguments become properties on an object that gets passed as an argument.
  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
  )
}
