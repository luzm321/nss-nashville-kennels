import React from "react"
import "./Animal.css"

// export const AnimalCard = () => (
//     <section className="animal">
//         <h3 className="animal__name">Doodles</h3>
//         <div className="animal__breed">Breed: Poodle</div>
//     </section>
// )


// Object destructuring: {dogName} prop as a parameter then an argument where AnimalCard child component invoked on Home parent component as
//an attribute. Turns arguments into keys of an object
export const AnimalCard = ({dogName, breed}) => (
    <section className="animal">
        <h3 className="animal__name">{dogName}</h3>
        <div className="animal__breed">Breed: {breed}</div>
    </section>
)
