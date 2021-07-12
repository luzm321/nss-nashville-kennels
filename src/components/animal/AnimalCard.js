import React from "react"
import "./Animal.css"

// export const AnimalCard = () => (
//     <section className="animal">
//         <h3 className="animal__name">Doodles</h3>
//         <div className="animal__breed">Breed: Poodle</div>
//     </section>
// )


// Object destructuring: {dogName} prop as a parameter then an argument where AnimalCard child component invoked on Home parent component as
// an attribute. Turns arguments into keys of an object
// export const AnimalCard = ({dogName, breed}) => (
//     <section className="animal">
//         <h3 className="animal__name">{dogName}</h3>
//         <div className="animal__breed">Breed: {breed}</div>
//     </section>
// )

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <h5 className="animal__breed">Breed: {animal.breed}</h5>
        <h5 className="location__address">Location: {location.name}</h5>
        <h5 className="customer__name">Customer: {customer.name}</h5>
    </section>
)
