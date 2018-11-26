import React, { Component } from "react"
import "./Owners.css"

export default class OwnerForm extends Component {

  state = {
    ownerName: "",
    contactInfo: "",
    animal: ""
  }
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructNewOwner = evt => {
    evt.preventDefault()
    const owner = {
      name: this.state.ownerName,
      phone: parseInt(this.state.contactInfo),
      animalId: this.props.animals.find(a => a.name === this.state.animal).id
    }
    this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
  }

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner name</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerName"
              placeholder="Owner name" />
          </div>
          <div className="form-group">
            <label htmlFor="contactInfo">Contact Information</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="contactInfo" placeholder="(xxx)-xxx-xxxx" />
          </div>
          <div className="form-group">
            <label htmlFor="animal">Assign an animal</label>
            <select defaultValue="" name="animal" id="animal"
              onChange={this.handleFieldChange}>
              <option value="">Select an animal</option>
              {
                this.props.animals.map(a => <option key={a.id} id={a.id}>{a.name}</option>)
              }
            </select>
          </div>
          <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }

}







