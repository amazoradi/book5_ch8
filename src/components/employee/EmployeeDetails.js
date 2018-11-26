import React, { Component } from "react"



export default class EmployeeDetail extends Component {
  render() {
    /*
        Using the route parameter, find the animal that the
        user clicked on by looking at the `this.props.animals`
        collection that was passed down from ApplicationViews
    */

    const employee = this.props.employees.find(em => em.id === parseInt(this.props.match.params.employeeID)) || {}
 


    return (
      <section className="employee detail-card">
        <div key={employee.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
             
              {employee.name}
            </h4>
            <h6 className="card-title"> Time with the team: {employee.time}</h6>
            <a href="#"
              onClick={() => this.props.deleteAnimal(employee.id)
                .then(() => this.props.history.push("/employees"))}
              className="card-link">Delete</a>
          </div>
        </div>
      </section>

    )
  }
}