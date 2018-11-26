import React, { Component } from "react"
import "./Employee.css"

export default class EmployeeForm extends Component {
  // Set initial state
  state = {
    employeeName: "",
    workTime: "",
    location: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  /* 
      Local method for validation, creating employee object, and
      invoking the function reference passed from parent component
   */
  constructNewEmployee = evt => {
    evt.preventDefault()
    const employee = {
      name: this.state.employeeName,
      time: this.state.workTime,
      locationId: this.props.locations.find(l => l.name === this.state.location).id
    }

    // Create the employee and redirect user to employee list
    this.props.hireEmployee(employee).then(() => this.props.history.push("/employees"))
  }

  render() {
    return (
      <React.Fragment>
        <form className="employeeForm">
          <div className="form-group">
            <label htmlFor="employeeName">Employee name</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="employeeName"
              placeholder="Employee name" />
          </div>
          <div className="form-group">
            <label htmlFor="workTime">Time with us?</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="workTime" placeholder="How long have you been working with Kennel Inc." />
          </div>
          <div className="form-group">
            <label htmlFor="location">Assign location</label>

            <select defaultValue="" name="location" id="location"
              onChange={this.handleFieldChange}>
              <option value="">Select a location</option>
              {
                this.props.locations.map(l => <option key={l.id} id={l.id}>{l.name}</option>)
              }
            </select>
          </div>
          <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}