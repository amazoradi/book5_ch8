import React, { Component } from 'react'
import "./Employee.css"
import { Link } from "react-router-dom"

class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="employeeButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/employees/new")
            }
            }>
            Hire Employee
                    </button>
        </div>
        <section className="employees list">
          <h2 className="card-title">Our Employees</h2>
          <div className="card_holder">
            {
              this.props.employees.map(employee =>

                <div key={employee.id} className="card">
                  {employee.name}
                  <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                  <a
                    href="#" onClick={() => this.props.fireEmployee(employee.id)}
                    className="card-link">You're Fired</a>
                </div>

              )
            }
          </div>
        </section>
      </React.Fragment>
    );
  }
}


export default EmployeeList



