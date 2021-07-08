import React from "react"
import "./Customer.css"

// export const CustomerCard = ({customerName, customerLocation}) => (
//     <section className="customer">
//         <h3 className="customer__name">{customerName}</h3>
//         <div className="customer__location">Address: {customerLocation}</div>
//     </section>
// )

export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="customer__address">Address: {customer.address}</address>
    </section>
)