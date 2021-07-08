import React from "react"
import "./Employee.css"

// export const EmployeeCard = ({employeeName, employeeLocation}) => (
//     <section className="employee">
//         <h3 className="employee__name">{employeeName}</h3>
//         <div className="employee__location">{employeeLocation}</div>
//     </section>
// )

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__location">Location: {employee.location.name}</address>
    </section>
)