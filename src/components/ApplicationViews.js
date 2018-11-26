import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalOwnersManager from "../modules/AnimalOwnersManager"
import AnimalDetails from './animals/AnimalDetails'
import EmployeeDetails from './employee/EmployeeDetails'
import LocationDetails from './locations/LocationDetails'
import OwnerDetails from './owners/OwnerDetails'
import AnimalForm from "./animals/AnimalForm"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owners/OwnerForm"




export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    animalOwners: []
  }

  componentDidMount() {
    const newState = {}

    AnimalManager.getAll()
      .then(animals => newState.animals = animals)
      .then(() => EmployeeManager.getAll())
      .then(employees => newState.employees = employees)
      .then(() => LocationManager.getAll())
      .then(locations => newState.locations = locations)
      .then(() => OwnerManager.getAll())
      .then(owners => newState.owners = owners)
      .then(() => AnimalOwnersManager.getAll())
      .then(animalOwners => newState.animalOwners = animalOwners)
      .then(() => this.setState(newState))
  }

  deleteAnimal = id => {
    return AnimalManager.removeAndList(id)
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  fireEmployee = id => {
    return EmployeeManager.removeAndList(id)
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  deleteOwner = id => {
    return OwnerManager.removeAndList(id)
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  addAnimal = (animal) => {
    return AnimalManager.post(animal)
      .then(() => AnimalManager.getAll())
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  hireEmployee = (employee) => {
    return EmployeeManager.post(employee)
      .then(() => EmployeeManager.getAll())
      .then(employees => this.setState({
        employees: employees
      }))
  }

  addOwner = (owner) => {
    return OwnerManager.post(owner)
      .then(() => OwnerManager.getAll())
      .then(owners => this.setState({
        owners: owners
      }))
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props} employees={this.state.employees} fireEmployee={this.fireEmployee} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList {...props} owners={this.state.owners} deleteOwner={this.deleteOwner} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetails {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetails {...props} employees={this.state.employees} fireEmployee={this.fireEmployee} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetails {...props} locations={this.state.locations} />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetails {...props} owners={this.state.owners} deleteOwner={this.deleteOwner} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} addAnimal={this.addAnimal} employees={this.state.employees} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} hireEmployee={this.hireEmployee} locations={this.state.locations} />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} addOwner={this.addOwner} animals={this.state.animals} />
        }} />

      </React.Fragment>
    )
  }
}

