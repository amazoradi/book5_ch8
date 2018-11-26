import React, { Component } from "react"
import "./Animals.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
  render() {
 
    const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

    return (
      <section className="animal detail-card">
        <div key={animal.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} className="icon--dog" />
              {animal.name}
            </h4>
            <h6 className="card-title">The {animal.type}</h6>
            <a href="#"
              onClick={() => this.props.deleteAnimal(animal.id)
       // .history is an array of everywhere weve been, pushing /animals makes us go to animal by puttinng /animals first in the array
                .then(() => this.props.history.push("/animals"))}
              className="card-link">Delete</a>
          </div>
        </div>
      </section>
    )
  }
}